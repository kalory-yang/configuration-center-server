// middleware.middleware.ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ResponseMiddleware implements NestMiddleware {
  constructor() {}
  use(req: Request, res: Response, next: NextFunction) {
    const originalSend = res.send;
    console.log(res);
    // @ts-ignore
    res.send = (body: any) => {
      // 统一的响应处理逻辑
      // 例如：格式化响应体，添加统一的状态码等
      // ...
      console.log(body);

      originalSend.call(res, body);
    };

    next();
  }
}
