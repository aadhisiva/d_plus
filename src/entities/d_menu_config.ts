import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class d_menu_config extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length:25
  })
  m_name: String;

  @Column({
    length:1
  })
  isenabled: Boolean

  @Column({
    length:20
  })
  m_parent: String

  @Column({
    length:11
  })
  status: Number
}