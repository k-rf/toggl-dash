import { Link, LinkProps } from "@mui/material";

type Props = Pick<LinkProps, "children" | "color" | "onClick" | "sx">;

export const ElLink = (props: Props) => {
  return <Link {...props} />;
};
