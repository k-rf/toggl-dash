import { CircularProgress } from "@mui/material";
import { ControllerProps, useController } from "react-hook-form";
import { match } from "ts-pattern";

import { ElTextField, ElTextFieldProps } from "../Elements";

type Props<T extends Record<string, unknown>> = Prettify<
  RhfController<T> & Common & (Select | Text | Num)
>;

type RhfController<T extends Record<string, unknown>> = Required<
  Pick<ControllerProps<T>, "defaultValue" | "name">
> &
  Pick<ControllerProps<T>, "control">;

type Common = Omit<ElTextFieldProps, keyof Select | "SelectProps">;

type Text = {
  type: "text";
};
type Num = {
  type: "number";
  max?: number;
  min?: number;
};
type Select = { type: "select"; loading?: boolean } & Pick<
  ElTextFieldProps,
  "select" | "onClick" | "onSelect" | "children"
> &
  Pick<Required<ElTextFieldProps>["SelectProps"], "open" | "onOpen" | "onClick">;

export const RhfTextField = <T extends Record<string, unknown> = Record<string, unknown>>({
  name,
  control,
  defaultValue,
  ...props
}: Props<T>) => {
  const { field } = useController({ name, control, defaultValue });

  const { _props, ...others } = match(props)
    .with({ type: "select" }, (selectProps) => {
      const { type, open, onOpen, onClick, loading, ..._props } = selectProps;

      return {
        select: type === "select",
        children: selectProps.children ?? <div />, // NOTE: `select` の場合、`children` が `undefined` だと警告が表示されるため
        SelectProps: {
          open,
          onOpen,
          onClick,
          IconComponent: loading ? LoadingIcon : undefined,
        },
        _props,
      };
    })
    .with({ type: "text" }, (_props) => {
      return {
        select: false,
        children: undefined,
        _props,
      };
    })
    .with({ type: "number" }, ({ min, max, ..._props }) => {
      return {
        select: false,
        children: undefined,
        inputProps: { min, max },
        _props,
      };
    })
    .exhaustive();

  return <ElTextField {..._props} {...others} {...field} id={props.id || name} />;
};

const LoadingIcon = () => {
  return (
    <CircularProgress sx={{ pointerEvents: "none", position: "absolute", right: 7 }} size={24} />
  );
};
