import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(15)
  username: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(10)
  password: string;
}
