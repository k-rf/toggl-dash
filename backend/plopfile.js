const { readdir, stat } = require("fs");
const path = require("path");

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = async (plop) => {
  plop.setHelper("hyphenation", hyphenation);
  plop.setHelper("camelize", camelize);
  plop.setHelper("subDir", subDir);

  plop.setGenerator("single value domain-primitive", {
    description: "Generate single value domain-primitive",
    prompts: [
      {
        type: "list",
        name: "feature",
        message: "Feature",
        choices: await getFeatures(),
      },
      {
        type: "list",
        name: "sub-feature",
        message: "Sub feature",
        choices: async (input) => {
          return [...(await getSubFeatures(input.feature)), "(new)", "(none)"];
        },
      },
      {
        type: "input",
        name: "new-sub-feature",
        message: "New sub feature name",
        when: (input) => {
          return input["sub-feature"] === "(new)";
        },
      },
      {
        type: "input",
        name: "name",
        message: "Name (file-name or ClassName)",
      },
      {
        type: "list",
        name: "type",
        message: "Type",
        choices: ["number", "string", "boolean", "Date"],
      },
      {
        type: "input",
        name: "overview",
        message: "Overview",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{ feature }}/core/domain/{{ subDir sub-feature new-sub-feature }}/{{ hyphenation name }}.ts",
        templateFile: ".plop/templates/class.hbs",
      },
      {
        type: "add",
        path: "src/features/{{ feature }}/core/domain/{{ subDir sub-feature new-sub-feature }}/{{ hyphenation name }}.spec.ts",
        templateFile: ".plop/templates/class.spec.hbs",
      },
    ],
  });
};

/** ディレクトリを読み込むときのベースとなるパス */
const BASE_PATH = "src/features";

const getFeatures = async () => {
  return getFeatureNames(BASE_PATH);
};

/**
 * @param {string} value
 */
const getSubFeatures = async (value) => {
  return getFeatureNames(path.join(BASE_PATH, value, "core/domain"));
};

/**
 * @param {{content: string; stat: import("fs").Stats}[]} contents
 */
const getDirNames = (contents) => {
  return contents.filter((e) => e.stat.isDirectory()).map((e) => e.content);
};

/**
 * @param {string} searchPath
 */
const getFeatureNames = async (searchPath) => {
  const contents = await readdirAsync(searchPath);
  return getDirNames(await contentStatsAsync(searchPath, contents));
};

/**
 * @param {string} feature
 * @param {string | undefined} newFeature
 */
const subDir = (feature, newFeature) => {
  switch (feature) {
    case "(none)":
      return undefined;
    case "(new)":
      return newFeature;
    default:
      return feature;
  }
};

/**
 * @param {string} value
 */
const capitalize = (value) => {
  return [value.at(0).toUpperCase(), value.slice(1)].join("");
};

/**
 * @param {string} value
 */
const hyphenation = (value) => {
  return value.replace(/([a-z0-9])([A-Z])/, "$1-$2").toLocaleLowerCase();
};

/**
 * @param {string} value
 */
const camelize = (value) => {
  return value.split("-").map(capitalize).join("");
};

/**
 * @param {string} basePath
 * @returns {Promise<string[]>}
 */
const readdirAsync = (basePath) => {
  return new Promise((resolve, reject) => {
    readdir(basePath, (err, files) => {
      if (err) reject(err);

      resolve(files);
    });
  });
};

/**
 * @param {string} basePath
 * @returns {Promise<import("fs").Stats>}
 */
const statAsync = (basePath) => {
  return new Promise((resolve, reject) => {
    stat(basePath, (err, status) => {
      if (err) reject(err);

      resolve(status);
    });
  });
};

/**
 * @param {string} base
 * @param {string[]} contents
 * @returns {Promise<{content: string; stat: import("fs").Stats}[]>}
 */
const contentStatsAsync = async (base, contents) => {
  return await Promise.all(
    contents.map(async (e) => {
      const stat = await statAsync(path.join(base, e));

      return { content: e, stat };
    })
  );
};
