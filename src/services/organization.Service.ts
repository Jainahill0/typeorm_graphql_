import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganizationInput } from 'src/dto/organizationDto';
import { Organization } from 'src/entity/organization.entity';
import { Repository } from 'typeorm';
import { pick } from 'lodash';
import { User } from 'src/entity/user.entity';
import { OrgUser } from 'src/entity/orgUser.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(OrgUser)
    private readonly orgUserRepository: Repository<OrgUser>
  ) {}

  async create(
    createOrganizationInput: CreateOrganizationInput,
  ): Promise<Organization> {
    const existingUser = await this.userRepository.findOne({
      where: { firstName: createOrganizationInput.firstName },
    });
    const saveOrganization = await this.organizationRepository.save({
      ...pick(createOrganizationInput, [
        'orgName',
        'industry',
        'orgSize',
        'firstName',
      ]),
      organization: existingUser,
    });
    const orgUser = await this.orgUserRepository.save({
      organization:saveOrganization,
      user:existingUser,
    });
    return saveOrganization;
  }


  async findAll(): Promise<Organization[]> {
    const allOrganizations = await this.organizationRepository.find();
    return allOrganizations;
  }
}
