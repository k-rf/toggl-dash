import { Output } from "~/shared/v1/application-service/output";

type Props = {
  id: string;
  summary: string;
  order: number;
}[];

export class RetrieveDashButtonOutput extends Output<Props, "RetrieveDashButtonOutput"> {
  readonly type = "RetrieveDashButtonOutput";
}
