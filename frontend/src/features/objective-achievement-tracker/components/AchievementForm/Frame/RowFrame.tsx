import { Stack } from "@mui/material";

export const RowFrame = (props: { children: React.ReactNode }) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      {props.children}
    </Stack>
  );
};
