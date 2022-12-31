import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, userEvent, waitFor, within } from "@storybook/testing-library";

import { TogglConfigRegisterForm, ApiTokenRegisterFormProps } from "./TogglConfigRegisterForm";

export default { component: TogglConfigRegisterForm } as Meta<ApiTokenRegisterFormProps>;

type Story = StoryObj<ApiTokenRegisterFormProps>;

export const Default: Story = {
  argTypes: { onSubmit: { description: "Submit form data" } },
};

export const Initial: Story = {
  ...Default,
  name: "初期状態のとき、何も入力されておらず保存ボタンも非活性状態になっている",
  play: playUtils(async (ctx) => {
    await expect(ctx.tokenField).toHaveValue("");
    await expect(ctx.submitButton).toBeDisabled();
  }),
};

export const Submit: Story = {
  ...Default,
  name: "API トークンを入力し保存ボタンを押下すると、入力内容がリセットされる",
  play: playUtils(async (ctx) => {
    await ctx.inputTokenField("token");
    await ctx.clickSubmitButton();

    await waitFor(async () => {
      await expect(ctx.tokenField).toHaveValue("");
    });
  }),
};

export const NoInput: Story = {
  ...Default,
  name: "トークンを入力せずにフォーカスアウトすると、エラーメッセージを表示する",
  play: playUtils(async (ctx) => {
    await fireEvent.focusIn(ctx.tokenField);
    await fireEvent.focusOut(ctx.tokenField);

    await waitFor(async () => {
      await expect(await ctx.errorMessage()).toBeInTheDocument();
    });
  }),
};

type Context = {
  submitButton: HTMLElement;
  tokenField: HTMLElement;
  visibilityIcon: HTMLElement;
  errorMessage: () => Promise<HTMLElement>;
  inputTokenField: (data: string) => Promise<void>;
  clickSubmitButton: () => Promise<void>;
};

function playUtils(play: (context: Context) => Promise<void> | void) {
  return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const tokenField = within(canvasElement).getByPlaceholderText("API トークン");
    const submitButton = within(canvasElement).getByTestId("api-token-register-form-submit-button");
    const visibilityIcon = within(canvasElement).getByTestId(
      "api-token-register-form-visibility-toggle-icon-button"
    );
    const errorMessage = async () => await within(canvasElement).findByText("必須項目です");

    return await play({
      tokenField,
      submitButton,
      errorMessage,
      visibilityIcon,
      inputTokenField: async (data: string) => {
        await userEvent.type(tokenField, data);
      },
      clickSubmitButton: async () => {
        await waitFor(async () => {
          await expect(submitButton).toBeEnabled();
        });

        await userEvent.click(submitButton);
      },
    });
  };
}
