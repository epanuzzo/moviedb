/**
 * Creates a debounced function that delays invoking the provided function until after the specified delay.
 * If the debounced function is called again before the delay period ends, the previous invocation is canceled.
 *
 * @param func - The function to debounce.
 * @param delay - The number of milliseconds to delay.
 * @returns A new debounced function.
 */
export const debounce = (func: (...args: unknown[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: unknown[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
