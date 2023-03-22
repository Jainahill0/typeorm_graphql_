import { Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Organization } from './organization.entity';

@Entity()
export class OrgUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User , user => user.orgUser)
  @JoinTable()
  user: User;

  @ManyToOne(() => Organization , organization => organization.orgUsers)
  @JoinTable()
  organization: Organization

}
