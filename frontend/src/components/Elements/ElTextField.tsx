import { TextField, TextFieldProps } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = Pick<
  TextFieldProps,
  | "label"
  | "size"
  | "fullWidth"
  | "error"
  | "helperText"
  | "onKeyDown"
  | "placeholder"
  | "type"
  | "InputProps"
  | "id"
> & { registration: Partial<UseFormRegisterReturn> };

export const ElTextField = (props: Props) => {
  const { registration, ...others } = props;

  return <TextField {...others} {...registration} />;
};
