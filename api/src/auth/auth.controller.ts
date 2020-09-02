import { Controller, Get, Body, ValidationPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SendTokenDto } from './dto/send-token.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<SendTokenDto> {
    return await this.authService.registerUser(createUserDto);
  }

  @Post('/login')
  async loginUser(
    @Body(ValidationPipe) loginUserDto: LoginUserDto,
  ): Promise<SendTokenDto> {
    return await this.authService.loginUser(loginUserDto);
  }
}
