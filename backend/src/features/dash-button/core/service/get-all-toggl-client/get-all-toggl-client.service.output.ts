import { Output } from "~/shared/v1/application-service/output";

type Props = {
  id: number;
  name: string;
}[];

export class GetAllTogglClientServiceOutput extends Output<
  Props,
  "GetAllTogglClientServiceOutput"
> {
  readonly type = "GetAllTogglClientServiceOutput";
}
