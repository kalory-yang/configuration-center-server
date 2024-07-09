import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { NameSpaceModal } from "../domain/nameSpace.entity";
@Injectable()
export class NameSpaceService {
  constructor(
    @InjectRepository(NameSpaceModal)
    private usersRepository: Repository<NameSpaceModal>,
  ) {}

  async getHello(): Promise<NameSpaceModal[]> {
    const result = await this.usersRepository.find();
    return result;
  }
}
