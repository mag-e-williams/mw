/**
 * validates string is not empty.
 */
export function isEmpty(str: string | null | undefined) {
  return !str || str.length === 0;
}
