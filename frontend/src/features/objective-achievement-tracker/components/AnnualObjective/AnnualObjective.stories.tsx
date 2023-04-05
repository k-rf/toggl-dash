import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, waitForElementToBeRemoved, within } from "@storybook/testing-library";
// eslint-disable-next-line storybook/use-storybook-testing-library
import { act } from "@testing-library/react";

import { range } from "~/utils/range";
import { sleep } from "~/utils/sleep";

import { AnnualObjective } from "./AnnualObjective";

export default { component: AnnualObjective } as Meta<typeof AnnualObjective>;

type Story = StoryObj<typeof AnnualObjective>;

export const Default: Story = {
  args: {},
};

export const SetObjective: Story = {
  name: "目標を設定する",
  play: playUtils(async (ctx) => {
    await act(async () => {
      await sleep(400); // XXX: 少し待たないと値が入力されない
    });

    await monthPromiseChain(async (month) => {
      await ctx.clickAvailableTimeButton(month);

      const dialog = await within(ctx.parentEl).findByRole("dialog");
      const inputTo = ctx.inputAvailableTimeField(dialog);

      await inputTo("weekday", "22");
      await inputTo("weekdayHour", "4");
      await inputTo("holiday", "8");
      await inputTo("holidayHour", "11");
      await inputTo("offDay", "1");

      await ctx.clickConfirmButton(dialog);

      await waitForElementToBeRemoved(within(dialog).queryByText(/利用可能時間を設定する/));

      await act(async () => {
        await sleep(400); // XXX: 少し待たないと次のループで値が入力されない
      });
    });

    await ctx.inputAnnualObjectiveField("2000");
  }),
};

const monthPromiseChain = (cb: (month: Month) => Promise<void>) => {
  return range(1, 13).reduce((p, c) => {
    return p.then(() => cb(c as Month));
  }, Promise.resolve());
};

// -----------------------------------------------------------------------------

const mapper = { weekday: 0, weekdayHour: 1, holiday: 2, holidayHour: 3, offDay: 4 };

type Context = {
  canvasElement: HTMLElement;
  parentEl: HTMLElement;

  annualObjectiveField: () => Promise<HTMLElement>;
  inputAnnualObjectiveField: (data: string) => Promise<void>;

  availableTimeButton: (month: Month) => Promise<HTMLElement>;
  clickAvailableTimeButton: (month: Month) => Promise<void>;

  availableTimeFields: (dialog: HTMLElement) => Promise<HTMLElement[]>;
  inputAvailableTimeField: (
    dialog: HTMLElement
  ) => (key: keyof typeof mapper, value: string) => Promise<void>;
  confirmButton: (dialog: HTMLElement) => Promise<HTMLElement>;
  clickConfirmButton: (dialog: HTMLElement) => Promise<void>;
};

function playUtils(play: (context: Context) => Promise<void> | void) {
  return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // eslint-disable-next-line testing-library/no-node-access
    const parentElement = canvasElement.parentElement ?? canvasElement;
    const canvas = within(canvasElement);

    const annualObjectiveField = () => canvas.findByLabelText("目標時間");
    const inputAnnualObjectiveField = async (data: string) => {
      await userEvent.type(await annualObjectiveField(), `{selectall}${data}`);
    };

    const availableTimeButton = async (month: Month) =>
      (await canvas.findAllByRole("button", { name: /時間/ })).at(month - 1) ?? Err();

    const clickAvailableTimeButton = async (month: Month) => {
      await userEvent.click(await availableTimeButton(month));
    };

    const availableTimeFields = (dialog: HTMLElement) => {
      return within(dialog).findAllByRole("spinbutton");
    };

    const confirmButton = (dialog: HTMLElement) => {
      return within(dialog).findByRole("button", { name: "設定する" });
    };
    const clickConfirmButton = async (dialog: HTMLElement) => {
      const button = await confirmButton(dialog);

      await waitFor(async () => {
        await expect(button).toBeEnabled();
      });
      await userEvent.click(button);
    };

    const inputAvailableTimeField =
      (dialog: HTMLElement) => async (key: keyof typeof mapper, value: string) => {
        const fields = await availableTimeFields(dialog);

        await userEvent.type(fields.at(mapper[key]) ?? Err(), `{selectall}${value}`);
      };

    return await play({
      canvasElement,
      parentEl: parentElement,

      annualObjectiveField,
      inputAnnualObjectiveField,

      availableTimeButton,
      clickAvailableTimeButton,

      availableTimeFields,
      inputAvailableTimeField,
      confirmButton,
      clickConfirmButton,
    });
  };
}

const Err = () => {
  throw new Error();
};
