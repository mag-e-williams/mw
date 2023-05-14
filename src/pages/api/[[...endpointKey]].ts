import { endpoints, isValid } from 'api/endpoints';
import { handleApiError, methodNotAllowedError } from 'api/handleApiError';
import type { NextApiRequest, NextApiResponse } from 'next';

type Processor = (request: NextApiRequest, response: NextApiResponse) => Promise<void>;

const parseEndpointKey = (request: NextApiRequest) => {
  const {
    query: { endpointKey: rawKey },
  } = request;
  return typeof rawKey === 'string' ? rawKey : rawKey?.join('/');
};

const parseEndpointParams = (request: NextApiRequest) => {
  const { query } = request;
  const { page } = query;

  if (Array.isArray(page)) {
    return { page: page[0] };
  }

  return { page };
};

/**
 * For a GET request, awaits data from the fetcher function or returns a 500 if there's no
 * query specified in the body.
 */
const handleGet: Processor = async (request, response) => {
  const endpointKey = parseEndpointKey(request);
  if (!isValid(endpointKey)) {
    handleApiError(response, 'Malformed endpoint key');
    return;
  }
  try {
    if (endpointKey === 'photos') {
      const endpointParams = parseEndpointParams(request);
      const { page } = endpointParams;
      const data = await endpoints[endpointKey](parseInt(page || '0', 10));
      response.json(data);
    }
    const data = await endpoints[endpointKey]();
    response.json(data);
  } catch (error) {
    handleApiError(response, error);
  }
};

/**
 * Handles gets only, with valid endpoint keys.
 */
const handler: Processor = async (request, response) => {
  const { method } = request;
  switch (method) {
    case 'GET': {
      await handleGet(request, response);
      return;
    }
    default:
      methodNotAllowedError(request, response, ['GET']);
  }
};

export default handler;
