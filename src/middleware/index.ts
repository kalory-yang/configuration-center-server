import type { INestApplication } from "@nestjs/common";
import { ResponseMiddleware } from "./response";
/**
 * 统一注册中间件
 */

export const registerMiddleware = (app: INestApplication) => {
  app.use(ResponseMiddleware);
};
