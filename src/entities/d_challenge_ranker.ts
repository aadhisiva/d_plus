import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_challenge_ranker extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:11
  })
  challenge_id: Number;

  @Column({
    length:11
  })
  user_id: Number;

  @Column({
    length:1
  })
  rank: Number;

  @Column({
    length:35
  })
  description: String;

  @Column({
    length:2
  })
  status: Number;

}