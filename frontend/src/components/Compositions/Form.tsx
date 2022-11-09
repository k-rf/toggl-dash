import { zodResolver } from "@hookform/resolvers/zod";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { useForm, UseFormReturn, UseFormProps } from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

export type Methods<TFormValues extends Record<string, unknown>> = UseFormReturn<TFormValues>;

export type HandleSubmit<
  TFormValues extends Record<string, unknown>,
  R extends MouseEventHandler<HTMLBRElement> | KeyboardEventHandler<HTMLDivElement>
> = (methods: Methods<TFormValues>) => R;

type Props<TFormValues extends Record<string, unknown>, Schema> = {
  options?: UseFormProps<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>(
  props: Props<TFormValues, Schema>
) => {
  const methods = useForm<TFormValues>({
    ...props.options,
    resolver: props.schema && zodResolver(props.schema),
  });

  return <form>{props.children(methods)}</form>;
};

export type { Props as FormProps };
