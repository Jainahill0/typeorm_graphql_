import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

   @PrimaryGeneratedColumn()
   id: number;

   @Column('varchar')
   firstName!: string;

   @Column('varchar')
   lastName: string;

   @Column('varchar')
   email: string;

   @Column('varchar')
   phone: number;
}