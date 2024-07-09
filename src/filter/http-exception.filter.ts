import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch() // 捕获所有异常
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // 你可以根据异常的类型或内容来设置不同的code和message
    // 但为了简化，这里我们将所有异常视为“内部服务器错误”的变体，并设置code为1

    const errorResponse: any = {
      code: 1, // 设置为1表示有异常
      message:
        exception instanceof HttpException
          ? exception.getResponse()["cause"]
          : "Internal server error",
      data: null,
    };

    // 设置响应状态码和响应体
    response.status(status).json(errorResponse);
  }
}
