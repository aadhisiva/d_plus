import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_social_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:15
  })
  s_sit: string;

  @Column({
    length:11
  })
  s_id: Number;

  @Column({
    length:20
  })
  social_ac_id: Number;

  @Column({
    length:2
  })
  active_user: Number;

  @Column({
    length:11
  })
  profile_id: Number;
  
  @Column({
    length:2
  })
  status: Number;

}