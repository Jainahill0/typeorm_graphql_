import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar',)
  @Index()
  firstName!: string;

  @Column('varchar',)
  lastName!: string;

  @Column('varchar')
  email!: string;

  @Column('varchar')
  phone?: number;
}