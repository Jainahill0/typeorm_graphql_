import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Organization {

   @PrimaryGeneratedColumn()
   id: number;

   @Column('varchar')
   orgName: string;

   @Column('varchar')
   industry: string;

   @Column('varchar')
   orgSize: string;

   @ManyToOne(() => User, user => user.firstName)
   @JoinColumn({name:'user_name',referencedColumnName:'firstName'})
   firstName:User;                                                                                                
}