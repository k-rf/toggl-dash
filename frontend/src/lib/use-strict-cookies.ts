import { useCookies } from "react-cookie";
import { CookieSetOptions } from "universal-cookie";

export const useStrictCookies: StrictUseCookies<"toggl-api-token"> = useCookies;

type StrictUseCookies<T extends string, U = { [K in T]?: string }> = (
  dependencies?: T[]
) => [
  U,
  (name: T, value: string, options?: CookieSetOptions) => void,
  (name: T, options?: CookieSetOptions) => void
];
