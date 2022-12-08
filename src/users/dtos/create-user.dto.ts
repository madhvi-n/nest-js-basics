import {
  IsEmail, IsNotEmpty, MaxLength, MinLength
} from "class-validator";


export class CreateUserDto {

  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  password: string;

  @IsNotEmpty()
  @MinLength(2)
  first_name: string;

  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}