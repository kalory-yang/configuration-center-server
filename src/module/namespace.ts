import { Module } from "@nestjs/common";
import { NameSpaceController } from "../controller/namespace";
import { UserController } from "../controller/user";
import { NameSpaceService } from "../service/namespace";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NameSpaceModal } from "src/domain/nameSpace.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NameSpaceModal])],
  controllers: [NameSpaceController, UserController],
  providers: [NameSpaceService],
})
export class NameSpaceModule {}
