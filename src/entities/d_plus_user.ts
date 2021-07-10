import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_plus_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:100
  })
  firstName: string;

  @Column({
    length: 50
  })
  email: string;

  @Column({
    length: 100,
  })
  password: string;

  @Column({
    length:100
  })
  lastName: string;

  @Column({
    length:100
  })
  username: string;

  @Column()
  status: Number;

  @Column()
  dob: Number;

  @Column()
  gender: string;


}