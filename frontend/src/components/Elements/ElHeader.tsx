import { AppBar, AppBarProps, Box, Toolbar } from "@mui/material";

type MuiProps = Pick<AppBarProps, "position" | "sx">;
type CustomProps = { title: string; menu?: React.ReactNode };

type Props = MuiProps & CustomProps;

export const ElHeader = (props: Props) => {
  return (
    <AppBar>
      <Toolbar>
        {props.title}
        {props.menu && (
          <>
            <Box flexGrow={1} />
            {props.menu}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export type { Props as ElHeaderProps };
