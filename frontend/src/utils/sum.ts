export const sum = (values: (number | string)[]) => {
  return values.map(Number).reduce((p, c) => p + c, 0);
};
