import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, userEvent, waitFor, within } from "@storybook/testing-library";

import { TogglConfigRegisterForm } from "./TogglConfigRegisterForm";

export default { component: TogglConfigRegisterForm } as Meta<typeof TogglConfigRegisterForm>;

type Story = StoryObj<typeof TogglConfigRegisterForm>;

export const Default: Story = {
  argTypes: { onSubmit: { description: "Submit form data" } },
};

export const Initial: Story = {
  ...Default,
  name: "初期状態のとき、何も入力されておらず保存ボタンも非活性状態になっている",
  play: playUtils(async (ctx) => {
    await expect(ctx.apiTokenField).toHaveValue("");
    await expect(ctx.workspaceIdField).toHaveValue("");
    await expect(ctx.submitButton).toBeDisabled();
  }),
};

export const Submit: Story = {
  ...Default,
  name: "API トークン、ワークスペース ID を入力し保存ボタンを押下すると、入力内容がリセットされる",
  play: playUtils(async (ctx) => {
    await ctx.inputApiTokenField("x".repeat(32));
    await ctx.inputWorkspaceIdField("123");
    await ctx.clickSubmitButton();

    await waitFor(async () => {
      await expect(ctx.submitButton).toBeDisabled();
    });

    await waitFor(async () => {
      await expect(ctx.apiTokenField).toHaveValue("");
    });
    await waitFor(async () => {
      await expect(ctx.workspaceIdField).toHaveValue("");
    });
  }),
};

export const InputInvalidValueToBothFields: Story = {
  ...Default,
  name: "両方のフィールドに不正な値が入力されると、両方のエラーメッセージを表示する",
  play: playUtils(async (ctx) => {
    await ctx.inputApiTokenField("123");
    await ctx.inputWorkspaceIdField("-1");

    await waitFor(async () => {
      await expect(await ctx.apiTokenErrorMessage()).toBeInTheDocument();
      await expect(await ctx.workspaceIdErrorMessage()).toBeInTheDocument();
    });
  }),
};

export const InputOnlyApiToken: Story = {
  ...Default,
  name: "API トークンだけ入力しても、ボタンは非活性状態のままになる",
  play: playUtils(async (ctx) => {
    await ctx.inputApiTokenField("x".repeat(32));

    await waitFor(async () => {
      await expect(ctx.submitButton).toBeDisabled();
    });
  }),
};

export const NoInputApiToken: Story = {
  ...Default,
  name: "API トークンを入力せずにフォーカスアウトすると、エラーメッセージを表示する",
  play: playUtils(async (ctx) => {
    await fireEvent.focusIn(ctx.apiTokenField);
    await fireEvent.focusOut(ctx.apiTokenField);

    await waitFor(async () => {
      await expect(await ctx.apiTokenErrorMessage()).toBeInTheDocument();
    });
  }),
};

export const InputOnlyWorkspaceId: Story = {
  ...Default,
  name: "ワークスペース ID だけ入力しても、ボタンは非活性状態のままになる",
  play: playUtils(async (ctx) => {
    await ctx.inputWorkspaceIdField("123");

    await waitFor(async () => {
      await expect(ctx.submitButton).toBeDisabled();
    });
  }),
};

export const NoInputWorkspaceId: Story = {
  ...Default,
  name: "ワークスペース ID を入力せずにフォーカスアウトすると、エラーメッセージを表示する",
  play: playUtils(async (ctx) => {
    await fireEvent.focusIn(ctx.workspaceIdField);
    await fireEvent.focusOut(ctx.workspaceIdField);

    await waitFor(async () => {
      await expect(await ctx.workspaceIdErrorMessage()).toBeInTheDocument();
    });
  }),
};

export const NoInputBothFields: Story = {
  ...Default,
  name: "両方のフィールドを入力せずにフォーカスアウトすると、両方のエラーメッセージを表示する",
  play: playUtils(async (ctx) => {
    await fireEvent.focusIn(ctx.apiTokenField);
    await fireEvent.focusOut(ctx.apiTokenField);
    await fireEvent.focusIn(ctx.workspaceIdField);
    await fireEvent.focusOut(ctx.workspaceIdField);

    await waitFor(async () => {
      await expect(await ctx.apiTokenErrorMessage()).toBeInTheDocument();
      await expect(await ctx.workspaceIdErrorMessage()).toBeInTheDocument();
    });
  }),
};

type Context = {
  apiTokenField: HTMLElement;
  visibilityIcon: HTMLElement;
  apiTokenErrorMessage: () => Promise<HTMLElement>;
  inputApiTokenField: (data: string) => Promise<void>;

  workspaceIdField: HTMLElement;
  workspaceIdErrorMessage: () => Promise<HTMLElement>;
  inputWorkspaceIdField: (data: string) => Promise<void>;

  submitButton: HTMLElement;
  clickSubmitButton: () => Promise<void>;
};

function playUtils(play: (context: Context) => Promise<void> | void) {
  return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const apiTokenField = within(canvasElement).getByPlaceholderText("API トークン");
    const workspaceIdField = within(canvasElement).getByPlaceholderText("ワークスペース ID");
    const submitButton = within(canvasElement).getByTestId("api-token-register-form-submit-button");
    const visibilityIcon = within(canvasElement).getByTestId(
      "api-token-register-form-visibility-toggle-icon-button"
    );
    const apiTokenErrorMessage = async () => {
      return await within(canvasElement).findByText(
        "API トークンが適切なフォーマットではありません"
      );
    };
    const workspaceIdErrorMessage = async () => {
      return await within(canvasElement).findByText(
        "ワークスペース ID が適切なフォーマットではありません"
      );
    };

    return await play({
      apiTokenField,
      workspaceIdField,
      submitButton,
      apiTokenErrorMessage,
      workspaceIdErrorMessage,
      visibilityIcon,
      inputApiTokenField: async (data) => {
        await userEvent.type(apiTokenField, data);
      },
      inputWorkspaceIdField: async (data) => {
        await userEvent.type(workspaceIdField, data);
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
