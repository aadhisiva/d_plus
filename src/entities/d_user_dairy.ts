import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_user_dairy extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:11
  })
  dairy_id: Number;

  @Column({
    length:500
  })
  view: String

  @Column({
    length:5000
  })
  event: String

  @Column({
    length:2000
  })
  reminder_note: String;

  @Column({
    length:15
  })
  reminder_timestomp: Date;

  @Column({
    length:2000
  })
  note: String;

  @Column({
    length:2
  })
  status: Number;
}