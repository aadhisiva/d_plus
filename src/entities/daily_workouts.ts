import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class daily_workouts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({
    length:11
  })
  user_id: Number;

  @Column({
    length:11
  })
  workout_id: Number;

  @Column({
    length:2
  })
  status: Number;
}