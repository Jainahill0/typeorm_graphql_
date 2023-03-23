import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { OrgUser } from 'src/entity/orgUser.entity';
import { OrgUserResolver } from 'src/resolvers/orgUser.resolver';
import { OrgUserService } from 'src/services/orgUserService';
import { User } from 'src/entity/user.entity';
import { Organization } from 'src/entity/organization.entity';

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
        TypeOrmModule.forFeature([OrgUser,User,Organization]),
      ],
  providers: [OrgUserResolver,OrgUserService],
})
export class OrgUserModule {}