export const distributeByWeight = (target: number, weights: number[]) => {
  const total = weights.reduce((p, c) => p + c, 0);

  return weights.map((e) => {
    if (total === 0) return 0;

    return Math.min(Math.ceil((target * e) / total), e);
  });
};
