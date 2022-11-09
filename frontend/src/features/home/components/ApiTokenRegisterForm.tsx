import { InputAdornment, Stack } from "@mui/material";
import { KeyboardEventHandler, MouseEventHandler, useState } from "react";

import { Form, HandleSubmit, Methods } from "~/components/Compositions";
import { ElButton, ElTextField } from "~/components/Elements";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ElTypography } from "~/components/Elements/ElTypography";
import { VisibilityIcon, VisibilityOffIcon } from "~/components/Icons";
import { z } from "~/lib/zod";

const schema = z.object({
  apiToken: z.string().min(1),
});

type ApiTokenValues = z.infer<typeof schema>;

type Props = { onSubmit?: (value: ApiTokenValues) => Promise<void> | void };

export const ApiTokenRegisterForm = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const submit = (methods: Methods<ApiTokenValues>) => {
    return methods.handleSubmit(async (value) => {
      methods.reset({ apiToken: "" });

      await props.onSubmit?.(value);
    });
  };

  const handleSubmit: HandleSubmit<ApiTokenValues, MouseEventHandler> = (methods) => {
    return submit(methods);
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

  const handleShow = () => {
    setVisible(true);
  };

  const handleMask = () => {
    setVisible(false);
  };

  return (
    <Form<ApiTokenValues> options={{ mode: "all" }} schema={schema}>
      {(methods) => {
        const { error } = methods.getFieldState("apiToken");
        const {
          errors: { apiToken },
          isValid,
        } = methods.formState;

        return (
          <Stack spacing={1}>
            <ElTypography>Toggl の API トークンを入力してください</ElTypography>
            <ElTextField
              fullWidth
              placeholder="API トークン"
              type={visible ? "text" : "password"}
              error={Boolean(error)}
              onKeyDown={handleKeyDown(methods)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ElIconButton
                      disableTouchRipple
                      onMouseDown={handleShow}
                      onMouseUp={handleMask}
                      onMouseLeave={handleMask}
                      data-testid="api-token-register-form-visibility-toggle-icon-button"
                    >
                      {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </ElIconButton>
                  </InputAdornment>
                ),
              }}
              registration={methods.register("apiToken")}
            />
            <ElButton
              disabled={!isValid}
              onClick={handleSubmit(methods)}
              data-testid="api-token-register-form-submit-button"
            >
              保存する
            </ElButton>
            <ElTypography variant="body2" color="error">
              {apiToken?.message}
            </ElTypography>
          </Stack>
        );
      }}
    </Form>
  );
};

export type { Props as ApiTokenRegisterFormProps };
