import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'jellybean',
      password: 'jellybean'
    },
    {
      username: 'jayneroe',
      password: 'jayneroe'
    },
    {
      username: 'johndoe',
      password: 'johndoe'
    },
    {
      username: 'janedoe',
      password: 'janedoe'
    }
  ]

  getUsers(){
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string){
    return this.users.find((user) => user.username === username);
  }
}
