export function range(begin: number, end: number): Array<number>;
export function range(end: number): Array<number>;
export function range(begin: number, end?: number): Array<number> {
  if (end) {
    return [...new Array(end - begin).keys()].map((e) => e + begin);
  }

  return [...new Array(begin).keys()];
}
