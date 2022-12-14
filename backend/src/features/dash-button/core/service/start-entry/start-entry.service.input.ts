import { Input } from "~/shared/v1/application-service/input";

type Props = {
  dashButtonId: string;
};

export class StartEntryServiceInput extends Input<Props, "StartEntryServiceInput"> {
  readonly type = "StartEntryServiceInput";
}
