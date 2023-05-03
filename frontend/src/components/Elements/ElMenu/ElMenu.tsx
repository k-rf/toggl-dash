import { Menu, MenuProps } from "@mui/material";
import React, { useState } from "react";

type CustomProps = {
  children: ((onClick: () => void) => React.ReactNode) | React.ReactNode;
};

type TriggerProps = {
  trigger: React.ReactElement;
  open?: never;
  onClose?: never;
};

type OpenProps = {
  trigger?: never;
  open: MenuProps["open"];
  onClose?: MenuProps["onClose"];
};

type MuiProps = Pick<
  MenuProps,
  "sx" | "anchorPosition" | "anchorReference" | "componentsProps" | "onContextMenu"
>;

type Props<T extends "trigger" | "open"> = (CustomProps & MuiProps) &
  (T extends "trigger" ? TriggerProps : OpenProps);

export const ElMenu = <T extends "trigger" | "open">({ trigger, ...props }: Props<T>) => {
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
      {trigger && React.cloneElement(trigger, { onClick: handleOpen })}
      <Menu
        {...props}
        open={opened || Boolean(props.open)}
        onClose={props.onClose ?? handleClose}
        anchorEl={anchorEl}
      >
        {typeof props.children === "function" ? props.children(handleClose) : props.children}
      </Menu>
    </>
  );
};

export type { Props as ElMenuProps };
