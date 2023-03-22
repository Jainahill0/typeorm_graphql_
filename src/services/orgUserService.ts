import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrgUser } from 'src/entity/orgUser.entity';
import { CreateOrgUserInput } from 'src/dto/orgUser.Dto';

@Injectable()
export class OrgUserService {
  userRepository: any;
  organizationRepository: any;
  constructor(
    @InjectRepository(OrgUser)
    private readonly orgUserRepository: Repository<OrgUser>,
  ) {}

  async create(createOrgUserInput: CreateOrgUserInput): Promise<OrgUser> {
    const { userId, orgId } = createOrgUserInput;

    const orgUser = new OrgUser();
    orgUser.user = await this.userRepository.findOne(userId);
    orgUser.organization = await this.organizationRepository.findOne(orgId);


    return this.orgUserRepository.save(orgUser);
  }
}
