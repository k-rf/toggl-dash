import { Typography, TypographyProps } from "@mui/material";

type Props = Pick<TypographyProps, "children" | "variant" | "color" | "sx">;

export const ElTypography = (props: Props) => {
  return <Typography {...props} />;
};
