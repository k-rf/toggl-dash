import { useState, useCallback, useMemo } from "react";

export const useLoading = <T extends string>(keys: T[]) => {
  const [loading, setLoading] = useState(
    keys.reduce<{ [key: string]: boolean }>((p, c) => ({ ...p, [c]: false }), {})
  );

  const set = useCallback((key: T, loading: boolean) => {
    setLoading((current) => ({
      ...current,
      [key]: loading,
    }));
  }, []);

  const get = useCallback((key: T) => loading[key] ?? false, [loading]);

  const handle = useCallback(
    async (key: T, fn: CallableFunction) => {
      set(key, true);

      await fn();

      set(key, false);
    },
    [set]
  );

  const loadingState = useCallback(
    (key: T) => ({
      get: () => get(key),
      set: (loading: boolean) => set(key, loading),
      handle: (fn: CallableFunction) => handle(key, fn),
    }),
    [get, handle, set]
  );

  return useMemo(
    () => ({ getLoadingState: get, setLoadingState: set, loadHandler: handle, loadingState }),
    [get, handle, loadingState, set]
  );
};
