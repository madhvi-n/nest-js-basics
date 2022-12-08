import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { SerializedUser, User } from 'src/users/types/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: User[] = []

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  getUsers(){
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string){
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number){
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
