import { composeStories } from "@storybook/testing-react";
import { act, render } from "@testing-library/react";

import { AppProvider } from "~/provider";
import { sleep } from "~/utils/sleep";

import * as stories from "./AnnualObjective.stories";

const composedStories = composeStories(stories);

describe("AnnualObjective", () => {
  const stories = Object.values(composedStories).map((Story) => {
    return { storyName: Story.storyName, Story };
  });

  it.each(stories)("$storyName", async ({ Story }) => {
    const { baseElement } = render(<Story />, {
      wrapper: ({ children }) => {
        return <AppProvider>{children}</AppProvider>;
      },
    });

    act(() => {
      sleep(10);
    });

    expect(baseElement).toMatchSnapshot();
    await Story.play({ canvasElement: baseElement } as never);
    expect(baseElement).toMatchSnapshot();
  });
});
