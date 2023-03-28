import path from "path";

export const getStoryComponentLayer = (pathname: string) => {
  const directories = path.parse(pathname).dir.split("/");

  return directories
    .filter((directory) => ![".", "src"].includes(directory))
    .map((directory) => [directory.charAt(0).toUpperCase(), directory.slice(1)])
    .map((e) => e.join(""))
    .join("/");
};
