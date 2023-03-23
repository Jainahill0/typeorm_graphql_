import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UpdateUser } from "src/dto/updateUser.dto";
import { User } from "src/entity/user.entity";
import { UserService } from "src/services/userService";
import { CreateUserInput } from "src/dto/userDto";

@Resolver(() => User)
export class UserResolver {
    constructor(  private readonly usersService : UserService) {    }

    @Mutation()
    createUser( @Args('createUserInput') createUserInput :  CreateUserInput ) {        
        return this.usersService.create(createUserInput);
    }

    @Mutation()
    async updateUser(
        @Args('updateUserInput') updateUserInput :
    UpdateUser) {
        return this.usersService.update(updateUserInput)
    }
    
    @Mutation(()=> User)
    deleteUser(@Args('firstName', { type: ()=> String})
    firstName: string)
    {
        return this.usersService.remove(firstName);
    }

    @Query()
    getAllUsers():Promise<User[]> {
        return this.usersService.findAll();
    }
}