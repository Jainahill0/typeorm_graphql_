import { Module } from '@nestjs/common';
import { UserResolver } from 'src/resolvers/user.resolver';
import { UserService } from 'src/services/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
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
    TypeOrmModule.forFeature([User,Organization]),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}