import { useEffect, useState } from "react";
import bundler from "../bundler";

export const useDebounce = (value: string, delay: number, bundle: boolean) => {
  const [debouncedValue, setDebouncedValue] = useState<{
    code: string | undefined;
    error: string | undefined;
  }>();

  useEffect(() => {
    const debounceHandler = setTimeout(async () => {
      if (bundle) {
        const output = await bundler(value);
        setDebouncedValue(output);
        return;
      }
      setDebouncedValue({ code: value, error: "" });
    }, delay);

    return () => clearTimeout(debounceHandler);
  }, [value, delay]);

  return debouncedValue;
};
