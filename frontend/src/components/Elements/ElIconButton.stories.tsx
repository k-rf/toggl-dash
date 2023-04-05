import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import { SaveIcon } from "../Icons";

import { ElIconButton } from "./ElIconButton";

export default {
  component: ElIconButton,
  args: {
    children: <SaveIcon fontSize="inherit" />,
  },
} as Meta<typeof ElIconButton>;

type Story = StoryObj<typeof ElIconButton>;

export const Default: Story = {};

export const Size: Story = {
  render: renderSequential([{ size: "small" }, { size: "medium" }, { size: "large" }]),
};

export const Color: Story = {
  render: renderSequential([
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

function renderSequential(args: Story["args"][]) {
  const render: Story["render"] = (defaultValue, ctx) => {
    return (
      <Box>
        {args.map((props, i) => {
          const Render: React.FC<Story["args"]> =
            ctx.parameters.component ?? ctx.component ?? (() => <></>);

          return <Render key={i} {...defaultValue} {...props} />;
        })}
      </Box>
    );
  };

  return render;
}
