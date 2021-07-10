import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_profile_metrices extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:11
  })
  p_id: Number;

  @Column({
    length:10
  })
  weight: Number

  @Column({
    length:10
  })
  height: Number

  @Column()
  year_of_diagnosis: Date;

  @Column({
    length:15
  })
  color: String;

  @Column({
    length:15
  })
  cgm_update: String;

  @Column({
    length:11
  })
  status: Number;
}