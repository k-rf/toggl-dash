import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { RhfTextField } from "~/components/Compositions";
import { ElButton } from "~/components/Elements";
import {
  ElDialog,
  ElDialogActions,
  ElDialogContent,
  ElDialogProps,
  ElDialogTitle,
} from "~/components/Elements/ElDialog";
import { ElMenuItem } from "~/components/Elements/ElMenu";
import { useGetTogglClientsLazyQuery, useGetTogglProjectsByClientLazyQuery } from "~/graphql";
import { useLoading } from "~/hooks/use-loading";

const schema = z.object({
  clientId: z.preprocess(Number, z.number().int().min(1)).transform(String),
  projectId: z.preprocess(Number, z.number().int().min(1)).transform(String),
  description: z.string().min(1),
});

type Props = Pick<ElDialogProps, "open" | "onClose">;

export const CreateDashButtonDialog = (props: Props) => {
  const [getTogglClients, { data: togglClients }] = useGetTogglClientsLazyQuery();
  const [getTogglProjectsByClient, { data: togglProjects }] =
    useGetTogglProjectsByClientLazyQuery();

  const { handleSubmit, reset, formState, control, getValues } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const { loadingState } = useLoading(["client", "project"]);

  const [togglClientSelectOpen, setTogglClientSelectOpen] = useState(false);
  const [togglProjectSelectOpen, setTogglProjectOpen] = useState(false);

  return (
    <ElDialog open={props.open} onClose={props.onClose}>
      <ElDialogTitle>ダッシュボタンを作成する</ElDialogTitle>

      <ElDialogContent sx={{ overflow: "visible" }}>
        <Stack spacing={2}>
          <RhfTextField
            type="select"
            control={control}
            name="clientId"
            defaultValue=""
            label="クライアント"
            loading={loadingState("client").get()}
            open={togglClientSelectOpen}
            onOpen={async () => {
              await loadingState("client").handle(async () => getTogglClients());

              setTogglClientSelectOpen(true);
            }}
            onClick={() => setTogglClientSelectOpen(false)}
          >
            {togglClients?.togglClientAll.map((client) => (
              <ElMenuItem key={client.id} value={client.id}>
                {client.name}
              </ElMenuItem>
            ))}
          </RhfTextField>

          <RhfTextField
            type="select"
            control={control}
            name="projectId"
            defaultValue=""
            label="プロジェクト"
            disabled={!getValues("clientId")}
            loading={loadingState("project").get()}
            open={togglProjectSelectOpen}
            onOpen={async () => {
              await loadingState("project").handle(async () =>
                getTogglProjectsByClient({ variables: { id: Number(getValues("clientId")) } })
              );

              setTogglProjectOpen(true);
            }}
            onClick={() => setTogglProjectOpen(false)}
          >
            {togglProjects?.togglProjectByClient.map((project) => (
              <ElMenuItem key={project.id} value={project.id}>
                {project.name}
              </ElMenuItem>
            ))}
          </RhfTextField>

          <RhfTextField
            type="text"
            control={control}
            name="description"
            defaultValue=""
            label="詳細"
            error={!!formState.errors.description}
          />
        </Stack>
      </ElDialogContent>

      <ElDialogActions>
        <ElButton
          variant="text"
          color="inherit"
          onClick={(e) => {
            reset();
            props.onClose?.(e, "backdropClick");
          }}
        >
          キャンセル
        </ElButton>
        <ElButton
          disabled={!formState.isValid}
          onClick={handleSubmit(
            (data) => {
              reset();
              console.log(data);
            },
            (errors) => {
              console.log(errors);
            }
          )}
        >
          作成する
        </ElButton>
      </ElDialogActions>
    </ElDialog>
  );
};
