import { useState, useEffect } from "react";

/**
 * Custom hook for managing loading states
 * @param initialState - Initial loading state (default: false)
 * @returns [isLoading, setIsLoading, withLoading] - Loading state, setter, and wrapper function
 */
export const useLoading = (initialState: boolean = false) => {
  const [isLoading, setIsLoading] = useState(initialState);

  /**
   * Wraps an async function with automatic loading state management
   * @param fn - Async function to wrap
   * @returns Promise result of the function
   */
  const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    try {
      const result = await fn();
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, setIsLoading, withLoading };
};

/**
 * Hook for simulating a minimum loading time
 * Useful for preventing flashing spinners on fast operations
 * @param isActuallyLoading - The actual loading state
 * @param minDuration - Minimum duration in milliseconds (default: 500ms)
 */
export const useMinimumLoadingTime = (
  isActuallyLoading: boolean,
  minDuration: number = 500
) => {
  const [isLoading, setIsLoading] = useState(isActuallyLoading);

  useEffect(() => {
    if (isActuallyLoading) {
      setIsLoading(true);
      const startTime = Date.now();

      return () => {
        const elapsed = Date.now() - startTime;
        const remaining = minDuration - elapsed;

        if (remaining > 0) {
          setTimeout(() => setIsLoading(false), remaining);
        } else {
          setIsLoading(false);
        }
      };
    } else {
      const timer = setTimeout(() => setIsLoading(false), minDuration);
      return () => clearTimeout(timer);
    }
  }, [isActuallyLoading, minDuration]);

  return isLoading;
};
