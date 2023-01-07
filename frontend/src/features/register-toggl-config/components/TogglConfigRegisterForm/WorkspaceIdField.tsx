import { KeyboardEventHandler } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { ElTextField } from "~/components/Elements";

type Props = {
  error?: FieldError;
  onKeyDown: KeyboardEventHandler<Element>;
  registration: Partial<UseFormRegisterReturn>;
};

export const WorkspaceIdField = (props: Props) => {
  return (
    <ElTextField
      id="workspace-id-field"
      fullWidth
      size="small"
      placeholder="ワークスペース ID"
      type="text"
      error={Boolean(props.error)}
      onKeyDown={props.onKeyDown}
      registration={props.registration}
    />
  );
};
