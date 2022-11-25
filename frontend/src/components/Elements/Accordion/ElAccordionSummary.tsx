import {
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
  styled,
} from "@mui/material";

type Props = Pick<AccordionSummaryProps, "children" | "sx">;

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  "&.MuiAccordionSummary-root:hover": { cursor: "default" },
  ".MuiAccordionSummary-content": { alignItems: "center" },
}));

export const ElAccordionSummary = (props: Props) => {
  return <AccordionSummary {...props} />;
};

export type { Props as ElAccordionSummaryProps };
