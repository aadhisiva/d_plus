import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class map_training_to_workouts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:11
  })
  workout_id: Number;

  @Column({
    length: 100
  })
  training_id: Number;

  @Column({
    length: 2,
  })
  status: Number;

}