import { IsEmail, IsNotEmpty, IsNumberString, ValidateNested } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';

export class CreateCustomerDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;

  @ValidateNested()
  address: CreateAddressDto
}
