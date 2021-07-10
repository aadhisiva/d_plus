import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_plus_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:11
  })
  user_id: Number;

  @Column({
    length: 35
  })
  diet_type: string;

  @Column({
    length: 30,
  })
  diet_time: string;

  @Column({
    length: 11,
  })
  cals: Number;

  @Column({
    length: 11,
  })
  carbs: Number;

  @Column({
    length: 11,
  })
  fats: Number;

  @Column({
    length: 11,
  })
  protein: Number;

  @Column({
    length: 11,
  })
  fruit_veg: Number;

  @Column({
    length: 5000,
  })
  message: string;

  @Column({
    length: 11,
  })
  n_cat_id: number;

  @Column({
    length: 3000,
  })
  daily_targets_suggest: string;

  @Column({
    length: 2,
  })
  status: Number;

}