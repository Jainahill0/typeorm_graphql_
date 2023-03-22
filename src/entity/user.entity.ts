import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "./organization.entity";
import { OrgUser } from "./orgUser.entity";

@Entity()
export class User {

   @PrimaryGeneratedColumn('increment', { type:'int'})
   id: number;

   @Column('varchar')
   firstName!: string;

   @Column('varchar')
   lastName: string;

   @Column('varchar')
   email: string;

   @Column('varchar')
   phone: number;

   @OneToMany(() => Organization , (organization) => organization.user)
   organization: Organization[];

   @OneToMany(() => OrgUser , orgUser => orgUser.organization)
   orgUser : OrgUser[];
}