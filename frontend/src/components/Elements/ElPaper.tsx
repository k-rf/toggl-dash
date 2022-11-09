import { Paper, PaperProps } from "@mui/material";

type Props = Pick<PaperProps, "children" | "sx">;

export const ElPaper = (props: Props) => {
  return <Paper {...props} />;
};

export type { Props as ElPaperProps };
