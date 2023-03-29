import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrgUser } from "./orgUser.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar',{unique:true})
  @Index()
  firstName!: string;

  @Column('varchar',)
  lastName!: string;

  @Column('varchar')
  email!: string;

  @Column('varchar')
  phone?: number;

  @OneToMany(()=> OrgUser , orgUser => orgUser.user)
  orgUser: OrgUser
}