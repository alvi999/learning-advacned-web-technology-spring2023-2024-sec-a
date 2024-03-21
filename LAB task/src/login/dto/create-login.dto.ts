import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLoginDto {
  id: number;
  
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
