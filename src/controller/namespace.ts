import {
  ConsoleLogger,
  Controller,
  Get,
  HttpException,
  Inject,
} from "@nestjs/common";
import { NameSpaceService } from "../service/namespace";
import { NameSpaceModal } from "src/domain/nameSpace.entity";

@Controller("/namespace")
export class NameSpaceController {
  @Inject()
  private nameSpaceService: NameSpaceService;

  @Get("/list")
  async listNameSpace() {
    const result = await this.nameSpaceService.getHello();
    return {
      data: result,
    };
  }
}
