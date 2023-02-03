import React, { useCallback, useState } from "react";

import { ContextMenu } from "../components/ContextMenu/ContextMenu";

export const useDashButtonContextMenu = (dashButtonId: string) => {
  const [position, setPosition] = useState<{ mouseX: number; mouseY: number } | null>(null);

  const handleOpen = useCallback((e: React.MouseEvent) => {
    e.preventDefault();

    setPosition({ mouseX: e.clientX, mouseY: e.clientY });
  }, []);

  const handleClose = useCallback(() => {
    setPosition(null);
  }, []);

  return {
    handleOpen,
    render: () => (
      <ContextMenu
        open={Boolean(position)}
        onClose={handleClose}
        onContextMenu={handleOpen}
        anchorPosition={position ? { top: position.mouseY, left: position.mouseX } : undefined}
        dashButtonId={dashButtonId}
      />
    ),
  };
};
