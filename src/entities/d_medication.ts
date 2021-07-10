import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_medication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:25
  })
  name: String;

  @Column({
    length:30
  })
  type: String;

  @Column({
    length:5000
  })
  description: String;

  @Column({
    length:5000
  })
  audio_disc: String;

  @Column({
    length:30
  })
  category: String;

  @Column({
    length:2
  })
  status: Number;
}