import useSWR from 'swr';
import type { EndpointKey, EndpointType, EndpointParams, AwaitedType } from './endpoints';

const endpointUrl = (key: EndpointKey, params?: EndpointParams) => {
  let baseUrl = `/api/${key}`;
  if (params) {
    const paramString = Object.entries(params)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');
    baseUrl = [baseUrl, paramString].join('?');
  }
  return baseUrl;
};

/**
 * Uses a well-typed `fetch` to call an API endpoint using the api
 * key given, then grabs the JSON data from it.
 */
const fetchData = async <Key extends EndpointKey>(key: Key): Promise<EndpointType<Key>> => {
  const url = endpointUrl(key);
  const result = await fetch<EndpointType<Key>>(url);
  return result.json();
};

const fetchDataWithParams = async <Key extends EndpointKey, Params extends EndpointParams>(
  keyParams: [Key, Params],
): Promise<EndpointType<Key>> => {
  const url = endpointUrl(...keyParams);
  const result = await fetch<EndpointType<Key>>(url);
  return result.json();
};
/**
 * For client use only! Exposes a useSWR hook for fetching data
 * from one endpoint key that maps to an /api endpoint. Only
 * revalidates and refetches if the key starts with `latest`.
 * So other keys like `version` will only be fetched once on build.
 */

export const useData = <Key extends EndpointKey>(key: Key) => {
  const isImmutable = !key.startsWith('latest');
  return useSWR<AwaitedType<Key>, Error>(key, fetchData, {
    revalidateIfStale: !isImmutable,
    revalidateOnFocus: !isImmutable,
    revalidateOnReconnect: !isImmutable,
  });
};

export const useDataWithParams = <Key extends EndpointKey, Params extends EndpointParams>(
  key: Key,
  params?: Params,
) => {
  const keyParams: [Key, Params?] = params ? [key, params] : [key];
  const isImmutable = !key.startsWith('latest');
  return useSWR(keyParams, fetchDataWithParams, {
    revalidateIfStale: !isImmutable,
    revalidateOnFocus: !isImmutable,
    revalidateOnReconnect: !isImmutable,
  });
};
