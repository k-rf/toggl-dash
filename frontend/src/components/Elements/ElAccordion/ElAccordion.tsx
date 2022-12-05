import { Accordion, AccordionProps } from "@mui/material";

type Props = Pick<AccordionProps, "children" | "expanded" | "sx">;

export const ElAccordion = (props: Props) => {
  return <Accordion {...props} disableGutters />;
};

export type { Props as ElAccordionProps };
