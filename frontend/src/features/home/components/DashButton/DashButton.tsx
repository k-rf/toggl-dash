import { Box } from "@mui/material";

import {
  ElAccordion,
  ElAccordionDetails,
  ElAccordionSummary,
} from "~/components/Elements/ElAccordion";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ExpandMoreIcon } from "~/components/Icons/ExpandMoreIcon";
import { PlayArrowIcon } from "~/components/Icons/PlayArrowIcon";

type Props = {
  summary: React.ReactNode;
  details: React.ReactNode;
  expanded: boolean;
  onChange: () => void;
  onStart: () => void;
};

export const DashButton = (props: Props) => {
  return (
    <ElAccordion
      expanded={props.expanded}
      sx={{ minWidth: 320, maxWidth: 640 }}
      data-testid="dash-button-accordion"
    >
      <ElAccordionSummary>
        {props.summary}
        <Box flexGrow={1} />
        <ElIconButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
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
            transform: `rotate(${props.expanded ? 0 : 180}deg)`,
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
