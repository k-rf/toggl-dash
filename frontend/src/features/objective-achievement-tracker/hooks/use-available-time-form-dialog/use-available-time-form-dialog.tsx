import { useCallback, useState } from "react";

import { AvailableTimeFormDialog } from "../../components/AvailableTimeFormDialog";

type Props = {
  month: Month;
};

export const useAvailableTimeFormDialog = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handelClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    handleOpen,
    render: () => <AvailableTimeFormDialog open={open} onClose={handelClose} month={props.month} />,
  };
};
