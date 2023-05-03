import { AnnualObjective as AnnualObjectiveProps } from "~/graphql/graphql";
import { Output } from "~/shared/v1/application-service/output";

type Props = AnnualObjectiveProps[];

export class GetAnnualObjectiveOutput extends Output<Props, "GetAnnualObjectiveOutput"> {
  readonly type = "GetAnnualObjectiveOutput";
}
