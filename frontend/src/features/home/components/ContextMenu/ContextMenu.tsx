import { ElListItemIcon } from "~/components/Elements/ElList/ElListItemIcon";
import { ElListItemText } from "~/components/Elements/ElList/ElListItemText";
import { ElMenu, ElMenuItem, ElMenuProps } from "~/components/Elements/ElMenu";
import { DeleteIcon } from "~/components/Icons";
import { GetDashButtonsDocument, useDeleteDashButtonMutation } from "~/graphql";

type Props = Pick<ElMenuProps, "open" | "onClose" | "onContextMenu" | "anchorPosition"> & {
  dashButtonId?: string;
};

export const ContextMenu = (props: Props) => {
  const [deleteDashButton] = useDeleteDashButtonMutation({
    refetchQueries: [{ query: GetDashButtonsDocument }],
  });

  const handleDelete = async (e: React.MouseEvent<HTMLLIElement>) => {
    props.onClose?.(e, "escapeKeyDown");

    if (props.dashButtonId) {
      await deleteDashButton({ variables: { data: { dashButtonId: props.dashButtonId } } });
    }
  };

  return (
    <ElMenu
      open={Boolean(props.open)}
      onClose={props.onClose}
      onContextMenu={(e) => {
        e.preventDefault();
        props.onClose?.(e, "backdropClick");
      }}
      anchorPosition={props.anchorPosition}
      anchorReference="anchorPosition"
      sx={{ "& .MuiPaper-root": { minWidth: 180 } }}
    >
      <ElMenuItem onClick={handleDelete} onContextMenu={handleDelete}>
        <ElListItemIcon>
          <DeleteIcon color="error" />
        </ElListItemIcon>
        <ElListItemText>削除する</ElListItemText>
      </ElMenuItem>
    </ElMenu>
  );
};
