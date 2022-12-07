import { useNavigate } from "@tanstack/react-location";

import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ElMenu, ElMenuItem } from "~/components/Elements/ElMenu";
import { MenuIcon } from "~/components/Icons";
import { useStrictCookies } from "~/lib/use-strict-cookies";

export const HeaderMenu = () => {
  const [, , resetCookies] = useStrictCookies();
  const navigate = useNavigate();

  return (
    <ElMenu
      trigger={
        <ElIconButton color="inherit">
          <MenuIcon />
        </ElIconButton>
      }
    >
      {(onClose) => (
        <ElMenuItem
          onClick={() => {
            resetCookies("toggl-api-token");
            navigate({ to: "/register", replace: true });
            onClose();
          }}
        >
          トークンをリセットする
        </ElMenuItem>
      )}
    </ElMenu>
  );
};
