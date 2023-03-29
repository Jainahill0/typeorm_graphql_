import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar',{unique:true})
  @Index()
  orgName!: string;

  @Column('varchar')
  industry!: string;

  @Column('varchar',)
  orgSize?: string;

  @ManyToOne(() => User,user => user.firstName)
  @JoinColumn({ name: 'firstName', referencedColumnName: 'firstName' })
  firstName: User;

}