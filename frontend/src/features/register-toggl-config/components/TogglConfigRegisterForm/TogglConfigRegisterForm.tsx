import { Box, Stack } from "@mui/material";
import { KeyboardEventHandler, MouseEventHandler } from "react";

import { Form, HandleSubmit, Methods } from "~/components/Compositions";
import { ElButton } from "~/components/Elements";
import { ElTypography } from "~/components/Elements/ElTypography";
import { z } from "~/lib/zod";

import { ApiTokenField } from "./ApiTokenField";
import { WorkspaceIdField } from "./WorkspaceIdField";

const workspaceIdFieldErrorMessage = "ワークスペース ID が適切なフォーマットではありません";

const schema = z.object({
  apiToken: z.string().length(32, "API トークンが適切なフォーマットではありません"),
  workspaceId: z
    .preprocess(
      Number,
      z
        .number({ invalid_type_error: workspaceIdFieldErrorMessage })
        .int(workspaceIdFieldErrorMessage)
        .min(1, workspaceIdFieldErrorMessage)
    )
    .transform(String),
});

type TogglConfigValues = z.infer<typeof schema>;

type Props = { onSubmit?: (value: TogglConfigValues) => Promise<void> | void };

export const TogglConfigRegisterForm = (props: Props) => {
  const submit = (methods: Methods<TogglConfigValues>) => {
    return methods.handleSubmit(async (value) => {
      methods.reset({ apiToken: "", workspaceId: "" });

      await props.onSubmit?.(value);
    });
  };

  const handleKeyDown: HandleSubmit<TogglConfigValues, KeyboardEventHandler> = (methods) => {
    return (e) => {
      if (e.code === "Enter") {
        e.preventDefault();

        if (e.ctrlKey) {
          return submit(methods)(e);
        }
      }
    };
  };

  const handleSubmit: HandleSubmit<TogglConfigValues, MouseEventHandler> = (methods) => {
    return submit(methods);
  };

  return (
    <Form<TogglConfigValues> options={{ mode: "all" }} schema={schema}>
      {(methods) => {
        const { errors, isValid } = methods.formState;

        return (
          <Stack spacing={1}>
            <ApiTokenField
              error={errors.apiToken}
              onKeyDown={handleKeyDown(methods)}
              registration={methods.register("apiToken")}
            />
            <WorkspaceIdField
              error={errors.workspaceId}
              onKeyDown={handleKeyDown(methods)}
              registration={methods.register("workspaceId")}
            />
            <ElButton
              disabled={!isValid}
              onClick={handleSubmit(methods)}
              data-testid="api-token-register-form-submit-button"
            >
              保存する
            </ElButton>
            <ElTypography variant="body2" color="error" sx={{ height: "max-content" }}>
              {errors.apiToken && <Box>{errors.apiToken.message}</Box>}
              {errors.workspaceId && <Box>{errors.workspaceId.message}</Box>}
            </ElTypography>
          </Stack>
        );
      }}
    </Form>
  );
};
