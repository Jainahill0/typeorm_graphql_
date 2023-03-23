import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrgUser } from 'src/entity/orgUser.entity';
import { CreateOrgUserInput } from 'src/dto/orgUser.Dto';
import { Organization } from 'src/entity/organization.entity';
import { User } from 'src/entity/user.entity';
import { pick } from "lodash";

@Injectable()
export class OrgUserService {
  constructor(
    @InjectRepository(OrgUser)
    private readonly orgUserRepository: Repository<OrgUser>,
    @InjectRepository(User)
        private readonly  userRepository:Repository<User>,
    @InjectRepository(Organization)
      private readonly organizationRepository:Repository<Organization>
  ) {}

  async create(createOrgUserInput: CreateOrgUserInput): Promise<OrgUser> {

    const existingUser =await this.userRepository.findOne({
      where: { firstName:createOrgUserInput.firstName }
    })
    const createUser = await this.orgUserRepository.save({
      ...pick(createOrgUserInput, [
        'orgName',
        'industry',
        'orgSize',
        'firstName',
      ]),
      organization:existingUser
    })
    const orgUser = await this.orgUserRepository.save({
      organization:createUser,
      user:existingUser
    })
    return createUser;

  }
}