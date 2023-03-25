export const isMonth = (value: number): value is Month => {
  return 1 <= value && value <= 12;
};
