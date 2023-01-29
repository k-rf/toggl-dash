import { ElListItem } from "~/components/Elements/ElList";
import { ElTypography } from "~/components/Elements/ElTypography";

type Props = {
  label: JSX.Element | string;
  content: JSX.Element | string;
};

export const DashButtonDetailListItem = (props: Props) => {
  return (
    <ElListItem
      sx={{
        p: (theme) => theme.spacing(2, 0, 0),
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <ElTypography variant="caption">{props.label}</ElTypography>
      {props.content}
    </ElListItem>
  );
};
