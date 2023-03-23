import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOrganizationInput } from 'src/dto/organizationDto';
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

  @Query()
  getAllOrganizations(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }
}
