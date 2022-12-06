import { AppBar, AppBarProps, Toolbar } from "@mui/material";

type MuiProps = Pick<AppBarProps, "position" | "sx">;
type CustomProps = { title: string };

type Props = MuiProps & CustomProps;

export const ElHeader = (props: Props) => {
  return (
    <AppBar>
      <Toolbar>{props.title}</Toolbar>
    </AppBar>
  );
};

export type { Props as ElHeaderProps };
