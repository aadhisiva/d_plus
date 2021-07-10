import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class training extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length:35
  })
  name: String;

  @Column({
    length: 11
  })
  duration: Number;
  
  @Column({
    length: 2,
  })
  status: Number;

}