export type HmsTime = readonly [number, number, number];

export type AvailableTime = {
  time: HmsTime;
  weight: number;
};
