import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";

import { Output } from "~/shared/v1/application-service/output";

@Injectable()
export class OutputInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler<Output<unknown, "Output"> | unknown>) {
    return next.handle().pipe(
      map((e) => {
        if (e instanceof Output) {
          return e.value;
        } else {
          return e;
        }
      })
    );
  }
}
