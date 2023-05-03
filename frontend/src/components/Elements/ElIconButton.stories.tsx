import type { Meta, StoryObj } from "@storybook/react";

import { renderSequential } from "tools/storybook-utils/render-sequential";

import { SaveIcon } from "../Icons";

import { ElIconButton } from "./ElIconButton";

export default {
  component: ElIconButton,
  args: {
    children: <SaveIcon fontSize="inherit" />,
  },
} as Meta<typeof ElIconButton>;

type Story = StoryObj<typeof ElIconButton>;
const sequential = renderSequential<Story>;

export const Default: Story = {};

export const Size: Story = {
  render: sequential([{ size: "small" }, { size: "medium" }, { size: "large" }]),
};

export const Color: Story = {
  render: sequential([
    { color: "primary" },
    { color: "secondary" },
    { color: "info" },
    { color: "success" },
    { color: "warning" },
    { color: "error" },
    { color: "default" },
    { color: "inherit" },
  ]),
};
