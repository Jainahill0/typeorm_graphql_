import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'src/entity/organization.entity';
import { OrganizationResolver } from 'src/resolvers/organization.resolver';
import { OrganizationService } from 'src/services/organization.Service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { User } from 'src/entity/user.entity';
import { OrgUser } from 'src/entity/orgUser.entity';

@Module({
    imports: [
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          playground: true,
          typePaths: ['./**/*.graphql'],
          definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
          },
        }),
        TypeOrmModule.forFeature([Organization,User,OrgUser]),
      ],
  providers: [OrganizationResolver,OrganizationService],
})
export class OrganizationModule {}