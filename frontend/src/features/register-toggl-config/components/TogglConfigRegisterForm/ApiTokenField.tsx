import { InputAdornment } from "@mui/material";
import { KeyboardEventHandler, useState } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

import { ElTextField } from "~/components/Elements";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { VisibilityOffIcon, VisibilityIcon } from "~/components/Icons";

type Props = {
  error?: FieldError;
  onKeyDown: KeyboardEventHandler<Element>;
  registration: Partial<UseFormRegisterReturn>;
};

export const ApiTokenField = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
  };

  const handleMask = () => {
    setVisible(false);
  };

  return (
    <ElTextField
      id="api-token-field"
      fullWidth
      size="small"
      placeholder="API トークン"
      type={visible ? "text" : "password"}
      error={Boolean(props.error)}
      onKeyDown={props.onKeyDown}
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
      registration={props.registration}
    />
  );
};
