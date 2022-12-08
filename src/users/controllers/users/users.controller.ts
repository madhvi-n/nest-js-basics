import {
  Body, ClassSerializerInterceptor, Controller,
  Get, HttpException, HttpStatus,
  Inject, NotFoundException, Param,
  ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/user';

@Controller('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){

  }

  @Get('')
  getUsers() {
    this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/username/:username')
  getUserByUsername(@Param('username') username: string){
    const user =  this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/id/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);
    if (user) return new SerializedUser(user);
    // else throw new UserNotFoundException();
    else throw new NotFoundException();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUser: CreateUserDto){
    return this.userService.createUser(createUser);
  }
}
