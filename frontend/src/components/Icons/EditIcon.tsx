import { Edit } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type Props = Pick<SvgIconProps, "color" | "fontSize">;

export const EditIcon = (props: Props) => {
  return <Edit {...props} />;
};
