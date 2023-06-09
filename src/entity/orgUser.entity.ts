import { Entity, JoinColumn, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Organization } from './organization.entity';

@Entity()
export class OrgUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Organization, { cascade: true , nullable: false, eager: true })
  @JoinColumn({ name: 'organization_name', referencedColumnName: 'orgName' })
  organization: Organization;

  @ManyToOne(() => User, { cascade: true , nullable: false, eager: true })
  @JoinColumn({ name: 'firstName', referencedColumnName: 'firstName' })
  user: User;
}

