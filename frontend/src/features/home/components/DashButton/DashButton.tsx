import { Box, Divider } from "@mui/material";
import React from "react";

import {
  ElAccordion,
  ElAccordionDetails,
  ElAccordionSummary,
} from "~/components/Elements/ElAccordion";
import { ElIconButton } from "~/components/Elements/ElIconButton";
import { ElTypography } from "~/components/Elements/ElTypography";
import { ExpandMoreIcon, PlayArrowIcon } from "~/components/Icons";

import { useDashButtonContextMenu } from "../../hooks/use-dash-button-context-menu";

type Props = {
  dashButtonId: string;
  summary: React.ReactNode;
  details: React.ReactNode;
  expanded?: boolean;
  onChange: () => void;
  onStart: () => void;
};

export const DashButton = (props: Props) => {
  const { handleOpen, render: DashButtonContextMenu } = useDashButtonContextMenu(
    props.dashButtonId
  );

  return (
    <>
      <ElAccordion
        expanded={props.expanded}
        onContextMenu={handleOpen}
        sx={{ minWidth: 240, maxWidth: 640, "&:last-of-type": { borderRadius: "32px" } }}
        data-testid="dash-button-accordion"
      >
        <ElAccordionSummary sx={{ pl: 3, overflow: "hidden" }}>
          <ElTypography sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
            {props.summary}
          </ElTypography>
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
        <ElAccordionDetails sx={{ maxHeight: 320, overflow: "auto", px: 3 }}>
          <Divider sx={{ mt: -1 }} />
          {props.details}
        </ElAccordionDetails>
      </ElAccordion>
      <DashButtonContextMenu />
    </>
  );
};

export type { Props as DashButtonProps };
