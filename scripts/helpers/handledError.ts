import type { Response } from 'node-fetch';

/**
 * Prints out an error for the user for a given webhook if necessary -
 * and returns if it handled the error successfully.
 */
const handledError = async (data: Response) => {
  if (data.status >= 200 && data.status < 300) {
    return false;
  }

  const json = await data.json();
  console.error('🚨 Unknown error', data.status, json);
  return true;
};

export default handledError;
