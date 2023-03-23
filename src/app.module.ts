import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entity/organization.entity';
import { OrgUser } from './entity/orgUser.entity';
import { User } from './entity/user.entity';
import { OrganizationModule } from './modules/organization.module';
import { OrgUserModule } from './modules/orgUser.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      username:'root',
      password: 'Jain1700',
      database:'jain1',
      synchronize:true,
      logging:false,
      entities: [User,Organization,OrgUser]
    }),
    UserModule,
    OrganizationModule,
    OrgUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
