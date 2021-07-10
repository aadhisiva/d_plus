import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class device extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:11
  })
  d_id: Number;

  @Column({
      length:35
  })
  name: String;

  @Column({
    length:15
  })
  type: String;

  @Column({
    length:11
  })
  registered_date: Date;

  @Column({
    length:15
  })
  devices_id: String;

  @Column({
    length:2
  })
  status: Number;
}