import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_plus_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({
    length:100
  })
  first_name: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column({
    length:100
  })
  last_name: string;

  @Column({
    length:100
  })
  username: string;

  @Column()
  status: Number;

  @Column({
    length:10
  })
  dob: Number;

  @Column()
  gender: string;

  @Column()
  year_of_diagnosis: Number;

  @Column()
  weight: Number;

  @Column()
  height: Number;

  @Column()
  metric: Number;

  @Column()
  is_social_user: Boolean;

  @Column()
  country_id: Number;

  @Column({
    length:1000
  })
  social_id: String;

  @Column({
    length:5000
  })
  profile_pic: String;

}