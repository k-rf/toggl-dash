import { Input } from "~/shared/v1/application-service/input";

type Props = {
  clientId: number;
  client: string;
  projectId: number;
  project: string;
  description: string;
  order: number;
};

export class CreateDashButtonServiceInput extends Input<Props, "CreateDashButtonServiceInput"> {
  readonly type = "CreateDashButtonServiceInput";
}
