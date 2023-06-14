export function sortBy<T, K extends keyof T>(array: T[], prop: K, descending = true): T[] {
  const sortedArray = [...array];

  sortedArray.sort((a, b) => {
    const valueA = a[prop];
    const valueB = b[prop];

    if (valueA < valueB) {
      return descending ? 1 : -1;
    }
    if (valueA > valueB) {
      return descending ? -1 : 1;
    }
    return 0;
  });

  return sortedArray;
}
