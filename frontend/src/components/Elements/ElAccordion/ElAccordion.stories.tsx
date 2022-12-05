import type { Meta, StoryObj } from "@storybook/react";

import { ElAccordion, ElAccordionProps } from "./ElAccordion";
import { ElAccordionDetails } from "./ElAccordionDetails";
import { ElAccordionSummary } from "./ElAccordionSummary";

export default { component: ElAccordion } as Meta<ElAccordionProps>;

type Story = StoryObj<ElAccordionProps>;

export const Default: Story = {
  render: () => {
    return (
      <ElAccordion>
        <ElAccordionSummary>Summary</ElAccordionSummary>
        <ElAccordionDetails>Details</ElAccordionDetails>
      </ElAccordion>
    );
  },
};
