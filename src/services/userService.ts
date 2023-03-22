import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { UpdateUser } from "src/dto/updateUser.dto";
import { CreateUserInput } from "src/dto/userDto";

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private readonly  userRepository:Repository<User>,
        ) {}
    
        async create(createUserInput: CreateUserInput): Promise<User> {
            const user = await this.userRepository.save(createUserInput);
            return  user;
          }
        
        async update( Id: number, updateUserInput: UpdateUser): Promise<User> {
            const user = await  this.userRepository.findOne({});
            Object.assign(user, updateUserInput);
            return this.userRepository.save(user);
          }
 
        async remove(firstName: string): Promise<User> {
            const user = await this.userRepository.findOne({});
            await this.userRepository.remove(user);
            return user;
          }
          

        async findAll(): Promise<User[]> {
            const allUsers = await this.userRepository.find()
            console.log(allUsers);
            return allUsers;
      }
    


}