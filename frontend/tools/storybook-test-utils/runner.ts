import { generateStorybookTest } from "./generate-storybook-test";

generateStorybookTest()
  .then((result) => {
    for (const generated of result) {
      console.log(`[storyTest] Generated: ${generated}`);
    }
  })
  .catch(() => process.exit(1));
