import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NameSpaceModule } from "./module/namespace";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NameSpaceModal } from "./domain/nameSpace.entity";
import { DataSource } from "typeorm";
import { APP_INTERCEPTOR, APP_FILTER } from "@nestjs/core";
import { TransformInterceptor } from "./interceptor/transform.interceptor";
import { HttpExceptionFilter } from "./filter/http-exception.filter";

@Module({
  imports: [
    NameSpaceModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "yl926454",
      database: "configuration_center",
      entities: [NameSpaceModal],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 全局统一响应格式处理器
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    // 全局异常处理器
    // 注册全局异常过滤器
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
