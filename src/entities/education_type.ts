import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class education_type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:11
  })
  type_name: Number;

  @Column({
    length: 2,
  })
  status: Number;

}