import { generateStorybookTest } from "./generate-storybook-test";

generateStorybookTest()
  .then((results) => {
    for (const result of results) {
      console.log(`[storyTest] ${result}`);
    }
  })
  .catch(() => process.exit(1));
