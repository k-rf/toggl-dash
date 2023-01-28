import { useCallback, useState } from "react";

import { CreateDashButtonDialog } from "../components/CreateDashButtonDialog";

export const useCreateDashButtonDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handelClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    handleOpen,
    render: () => <CreateDashButtonDialog open={open} onClose={handelClose} />,
  };
};
