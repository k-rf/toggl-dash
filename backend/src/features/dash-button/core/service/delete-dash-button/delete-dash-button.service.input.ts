import { Input } from "~/shared/v1/application-service/input";

type Props = {
  dashButtonId: string;
};

export class DeleteDashButtonServiceInput extends Input<Props, "DeleteDashButtonServiceInput"> {
  readonly type = "DeleteDashButtonServiceInput";
}
