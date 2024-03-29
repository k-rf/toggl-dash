import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ObjectiveFormSchema, objectiveFormSchema } from "./objective-form-schema";

export const useObjectiveForm = () => {
  const {
    formState: {
      isValid,
      isDirty,
      errors: { objective: objectiveError },
    },
    ...others
  } = useForm<ObjectiveFormSchema>({
    resolver: zodResolver(objectiveFormSchema),
    mode: "all",
  });

  return {
    objectiveError,
    formState: { isValid, isDirty },
    ...others,
  };
};
