import { useAtom } from "jotai";

import { ElButton } from "~/components/Elements";
import {
  ElDialog,
  ElDialogActions,
  ElDialogContent,
  ElDialogProps,
  ElDialogTitle,
} from "~/components/Elements/ElDialog";

import { useAvailableTimeForm } from "../../hooks";
import { availableTimeListAtom } from "../../stores";
import { AchievementForm } from "../AchievementForm";

type Props = Prettify<Pick<ElDialogProps, "open" | "onClose"> & { month: Month }>;

export const AvailableTimeFormDialog = (props: Props) => {
  const [availableTimeList, setAvailableTimeList] = useAtom(availableTimeListAtom);

  const formMethods = useAvailableTimeForm({
    defaultValues: availableTimeList.at(props.month - 1),
  });

  const handleClose = <T extends React.BaseSyntheticEvent>(event: T) => {
    props.onClose?.(event, "backdropClick");
  };

  const formId = "achievement-form";

  return (
    <ElDialog open={props.open} onClose={props.onClose}>
      <ElDialogTitle>利用可能時間を設定する</ElDialogTitle>

      <ElDialogContent sx={{ overflow: "visible" }}>
        <AchievementForm
          id={formId}
          methods={formMethods}
          onSubmit={(e, value) => {
            console.log(value);
            setAvailableTimeList((current) => {
              return [...current.slice(0, props.month - 1), value, ...current.slice(props.month)];
            });
            handleClose(e);
          }}
        />
      </ElDialogContent>

      <ElDialogActions>
        <ElButton variant="text" color="inherit" onClick={handleClose}>
          キャンセル
        </ElButton>
        <ElButton type="submit" form={formId} disabled={!formMethods.formState.isValid}>
          設定する
        </ElButton>
      </ElDialogActions>
    </ElDialog>
  );
};
