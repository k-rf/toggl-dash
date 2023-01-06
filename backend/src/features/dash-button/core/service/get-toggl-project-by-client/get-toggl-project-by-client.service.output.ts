import { Output } from "~/shared/v1/application-service/output";

type Props = {
  id: number;
  name: string;
}[];

export class GetTogglProjectByClientServiceOutput extends Output<
  Props,
  "GetTogglProjectByClientServiceOutput"
> {
  readonly type = "GetTogglProjectByClientServiceOutput";
}
