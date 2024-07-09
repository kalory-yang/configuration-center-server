import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Expose, Transform } from "class-transformer";

@Entity({ name: "name_space" })
export class NameSpaceModal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: "user_id" })
  userId: number;

  @Column({ name: "user_name" })
  userName: string;

  @Column({ name: "create_user_email" })
  createUserEmail: string;

  @Column({ name: "description" })
  description: string;

  @Column({ name: "status" })
  status: number;

  @Column({ name: "create_time" })
  createTime: Date;

  @Column({ name: "update_time" })
  updateTime: Date;

  @Column({ name: "delete_time" })
  deleteTime: Date;
}
