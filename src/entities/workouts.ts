import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export enum WorkOut{
  EASY ="easy",
  MEDIUM = "medium",
  HARD = "hard"
}

@Entity()
export class workouts extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:11
  })
  workout_categ_id: Number;

  @Column({
    length: 100
  })
  name: string;

  @Column({
    length: 11,
  })
  duration: Number;

  @Column({
    length: 11,
  })
  work_id: Number;

  @Column({
    type : "enum",
    enum : WorkOut,
    array :true,
    default:[WorkOut.EASY,WorkOut.HARD,WorkOut.HARD]
  })
  role: WorkOut;

  @Column({
    length: 2,
  })
  status: Number;

}