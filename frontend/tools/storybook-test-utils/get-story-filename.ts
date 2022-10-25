import path from "path";

export const getStoryFilename = (filename: string) => {
  return path.basename(filename).replace(/\.(stories|story)\.tsx?$/, "");
};
