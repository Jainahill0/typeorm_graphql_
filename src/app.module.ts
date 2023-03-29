import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entity/organization.entity';
import { OrgUser } from './entity/orgUser.entity';
import { User } from './entity/user.entity';
import { OrganizationModule } from './modules/organization.module';
// import { OrgUserModule } from './modules/orgUser.module';
import { UserModule } from './modules/user.module';
// import * as dotenv from "dotenv";

// dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password: '1234567890',
      database:'jain1',
      synchronize:true,
      logging:false,
      entities: [User,Organization,OrgUser]
    }),
    UserModule,
    OrganizationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
