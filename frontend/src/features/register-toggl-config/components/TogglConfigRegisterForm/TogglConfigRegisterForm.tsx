import { Stack } from "@mui/material";
import { KeyboardEventHandler, MouseEventHandler } from "react";

import { Form, HandleSubmit, Methods } from "~/components/Compositions";
import { ElButton } from "~/components/Elements";
import { ElTypography } from "~/components/Elements/ElTypography";
import { z } from "~/lib/zod";

import { ApiTokenField } from "./ApiTokenField";

const schema = z.object({
  apiToken: z.string().min(1),
});

type ApiTokenValues = z.infer<typeof schema>;

type Props = { onSubmit?: (value: ApiTokenValues) => Promise<void> | void };

export const TogglConfigRegisterForm = (props: Props) => {
  const submit = (methods: Methods<ApiTokenValues>) => {
    return methods.handleSubmit(async (value) => {
      methods.reset({ apiToken: "" });

      await props.onSubmit?.(value);
    });
  };

  const handleKeyDown: HandleSubmit<ApiTokenValues, KeyboardEventHandler> = (methods) => {
    return (e) => {
      if (e.code === "Enter") {
        e.preventDefault();

        if (e.ctrlKey) {
          return submit(methods)(e);
        }
      }
    };
  };

  const handleSubmit: HandleSubmit<ApiTokenValues, MouseEventHandler> = (methods) => {
    return submit(methods);
  };

  return (
    <Form<ApiTokenValues> options={{ mode: "all" }} schema={schema}>
      {(methods) => {
        const { error } = methods.getFieldState("apiToken");
        const {
          errors: { apiToken: apiTokenError },
          isValid,
        } = methods.formState;

        return (
          <Stack spacing={1}>
            <ApiTokenField
              error={error}
              onKeyDown={handleKeyDown(methods)}
              registration={methods.register("apiToken")}
            />
            <ElButton
              disabled={!isValid}
              onClick={handleSubmit(methods)}
              data-testid="api-token-register-form-submit-button"
            >
              保存する
            </ElButton>
            <ElTypography variant="body2" color="error" sx={{ height: "max-content" }}>
              {apiTokenError?.message}
            </ElTypography>
          </Stack>
        );
      }}
    </Form>
  );
};

export type { Props as ApiTokenRegisterFormProps };
