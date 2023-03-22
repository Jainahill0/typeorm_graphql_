import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { OrgUserService } from 'src/services/orgUserService';
import { User } from 'src/entity/user.entity';
import { CreateOrgUserInput } from 'src/dto/orgUser.Dto';

@Resolver(()=> User)
export class OrgUserResolver {
  constructor(private readonly orgUserService: OrgUserService) {}

  @Mutation()
   createOrgUser(
    @Args('createOrgUserInput') createOrgUserInput: CreateOrgUserInput,
  ) { 
    return this.orgUserService.create(createOrgUserInput);
  }
}
