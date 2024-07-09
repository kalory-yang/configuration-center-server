import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        // 假设data是控制器方法返回的值
        // 你可以根据实际需求调整code和message的值
        const res: Response<T> = {
          code: 0, // 假设操作成功
          data: data, // 将控制器返回的数据作为data
          message: "操作成功", // 你可以根据需要设置message
        };
        return res;
      }),
    );
  }
}
