import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_challenges extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:300
  })
  name: String;

  @Column({
    length:3000
  })
  description: String;

  @Column({
    length:11
  })
  rank_index: number;

  @Column({
    length:300
  })
  type: String;

  @Column({
    length:2
  })
  status: Number;
}