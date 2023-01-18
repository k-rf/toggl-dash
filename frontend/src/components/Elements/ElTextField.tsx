import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = Pick<
  TextFieldProps,
  | "children"
  | "defaultValue"
  | "disabled"
  | "error"
  | "fullWidth"
  | "helperText"
  | "id"
  | "InputLabelProps"
  | "InputProps"
  | "label"
  | "name"
  | "onBlur"
  | "onChange"
  | "onClick"
  | "onKeyDown"
  | "onSelect"
  | "placeholder"
  | "ref"
  | "select"
  | "SelectProps"
  | "size"
  | "type"
  | "value"
> & { registration?: Partial<UseFormRegisterReturn> };

export const ElTextField = React.forwardRef<HTMLInputElement, Props>(
  ({ registration, ...props }, ref) => {
    return <TextField {...props} ref={ref} {...registration} />;
  }
);

ElTextField.displayName = "ElTextField";

export type { Props as ElTextFieldProps };
