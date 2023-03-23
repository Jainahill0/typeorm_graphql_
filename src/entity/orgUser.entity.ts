import { Entity, JoinColumn, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Organization } from './organization.entity';

@Entity()
export class OrgUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({name:'user_name' ,referencedColumnName:'firstName'})
  user: User;

  @ManyToOne(() => Organization)
  @JoinColumn({name:'org_name', referencedColumnName:'orgName'})
  organization: Organization;

}
