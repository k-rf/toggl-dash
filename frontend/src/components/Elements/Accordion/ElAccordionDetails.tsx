import { AccordionDetails, AccordionDetailsProps } from "@mui/material";

type Props = Pick<AccordionDetailsProps, "children" | "sx">;

export const ElAccordionDetails = (props: Props) => {
  return <AccordionDetails {...props} />;
};

export type { Props as ElAccordionDetailsProps };
