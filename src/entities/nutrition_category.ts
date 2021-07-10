import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_plus_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:35
  })
  name: String;

  @Column({
    length: 35
  })
  description: string;

  @Column({
    length: 30,
  })
  path: string;

  @Column({
    length: 11,
  })
  parent_id: Number;

  @Column({
    length: 2,
  })
  status: Number;

}