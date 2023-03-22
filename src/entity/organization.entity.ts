import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrgUser } from "./orgUser.entity";
import { User } from "./user.entity";

@Entity()
export class Organization {

   @PrimaryGeneratedColumn('increment', { type:'int'})
   id: number;

   @Column('varchar')
   orgName: string;

   @Column('varchar')
   industry: string;

   @Column('varchar')
   orgSize: string;

   @ManyToOne(() => User,(user) => user.organization)
   @JoinColumn()
   user:User[];

   @OneToMany(() => OrgUser , orgUser => orgUser.user )
   orgUsers:   OrgUser[];

}