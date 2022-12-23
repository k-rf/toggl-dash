import { Box } from "@mui/material";

import {
  ElAccordion,
  ElAccordionDetails,
  ElAccordionSummary,
} from "~/components/Elements/ElAccordion";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ExpandMoreIcon, PlayArrowIcon } from "~/components/Icons";

type Props = {
  summary: React.ReactNode;
  details: React.ReactNode;
  expanded?: boolean;
  onChange: () => void;
  onStart: () => void;
};

export const DashButton = (props: Props) => {
  return (
    <ElAccordion
      expanded={props.expanded}
      sx={{ minWidth: 240, maxWidth: 640 }}
      data-testid="dash-button-accordion"
    >
      <ElAccordionSummary>
        {props.summary}
        <Box flexGrow={1} />
        <ElIconButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            props.onStart();
          }}
          color="success"
        >
          <PlayArrowIcon />
        </ElIconButton>
        <ElIconButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            props.onChange();
          }}
          sx={{
            transform: `rotate(${props.expanded ? 180 : 0}deg)`,
            transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
          }}
          data-testid="dash-button-expansion-button"
        >
          <ExpandMoreIcon />
        </ElIconButton>
      </ElAccordionSummary>
      <ElAccordionDetails sx={{ maxHeight: 320, overflow: "auto" }}>
        {props.details}
      </ElAccordionDetails>
    </ElAccordion>
  );
};

export type { Props as DashButtonProps };
