import { Stack } from "@mui/material";
import type { Args, StoryObj } from "@storybook/react";

type Story<T extends Args> = StoryObj<T>;
type StoryArgs<T extends Args> = Story<T>["args"];
type StoryRender<T extends Args> = Story<T>["render"];

export const renderSequential = <T extends Args>(args: StoryArgs<T>[]) => {
  const render: StoryRender<T> = (defaultValue: StoryArgs<T>, ctx) => {
    return (
      <Stack direction="row" spacing={1}>
        {args.map((props, i) => {
          const Render: React.FC<StoryArgs<T>> =
            ctx.parameters.component ?? ctx.component ?? (() => <></>);

          return <Render key={i} {...defaultValue} {...props} />;
        })}
      </Stack>
    );
  };

  return render;
};
