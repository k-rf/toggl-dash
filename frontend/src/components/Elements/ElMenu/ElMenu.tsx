import { Menu } from "@mui/material";
import React, { useState } from "react";

type CustomProps = {
  children: (onClick: () => void) => React.ReactNode;
  trigger: React.ReactElement;
};

type Props = CustomProps;

export const ElMenu = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setOpened(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpened(false);
  };

  return (
    <>
      {React.cloneElement(props.trigger, { onClick: handleOpen })}
      <Menu open={opened} onClose={handleClose} anchorEl={anchorEl}>
        {props.children(handleClose)}
      </Menu>
    </>
  );
};

export type { Props as ElMenuProps };
