/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUser } from 'src/dto/updateUser.dto';
import { CreateUserInput } from 'src/dto/userDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = await this.userRepository.save(createUserInput);
    return user;
  }

  async update(updateUserInput: UpdateUser): Promise<User | string> {
    const user = await this.userRepository.findOne({
      where: {
        firstName: updateUserInput.firstName,
      },
    });

    if (!user) {
      return 'user not found';
    }

    user.lastName = updateUserInput.lastName ?? user.lastName;
    user.email = updateUserInput.email ?? user.email;
    user.phone = updateUserInput.phone ?? user.phone;

    const updatedUser = await this.userRepository.save(user);

    return updatedUser;
  }

  async deleteUser(firstName: string): Promise<string> {
    const user = await this.userRepository.findOne({
      where: {
        firstName: firstName,
      },
      
    });
    if (!user) {
      return 'User not found';
    }
    await this.userRepository.delete(user);
    return 'User Deleted';
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userRepository.find();
    console.log(allUsers);
    return allUsers;
  }
}
