import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:11
  })
  type_id: Number;

  @Column({
    length: 100
  })
  title: string;

  @Column({
    length: 3000,
  })
  description: string;

  @Column({
    length: 200,
  })
  path: string;

  @Column({
    length: 2,
  })
  status: Number;

}