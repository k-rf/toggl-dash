import { DeleteForever } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const DeleteIcon = (props: Props) => {
  return <DeleteForever {...props} />;
};
