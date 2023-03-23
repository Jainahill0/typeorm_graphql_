import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOrganizationInput } from 'src/dto/organizationDto';
import { UpdateOrgInput } from 'src/dto/updateOrg';
import { Organization } from 'src/entity/organization.entity';
import { OrganizationService } from 'src/services/organization.Service';

@Resolver(() => Organization)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}

  @Mutation()
  createOrganization(
    @Args('createOrganizationInput')
    createOrganizationInput: CreateOrganizationInput,
  ) {
    return this.organizationService.create(createOrganizationInput);
  }

  @Mutation()
  updateOrganization(
    @Args('updateOrgInput')
    updateOrgInput: UpdateOrgInput
  ){
    return this.organizationService.update(
      updateOrgInput
    )
  }
  @Mutation()
  deleteOrg(@Args('orgName')
  orgName: string)
  {
    return this.organizationService.deleteOrg(orgName);
  }
  @Query()
  getAllOrganizations(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }

  
}
