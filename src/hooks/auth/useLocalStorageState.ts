import { useCallback, useState } from "react";

export default function useLocalStorageState(
  key: string,
  defaultValue: string | null = null
): [string | null, (value: string | null) => void] {
  const [state, setState] = useState<string | null>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : defaultValue;
  });

  const setValue = useCallback(
    (value: string | null) => {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
      setState(value);
    },
    [key]
  );

  return [state, setValue];
}
