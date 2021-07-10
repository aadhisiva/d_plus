import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class workuout_categories extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: String;

  @Column({
    length: 2,
  })
  status: Number;

}