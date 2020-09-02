import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SendTokenDto } from './dto/send-token.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async loginUser(loginUserDto: LoginUserDto): Promise<SendTokenDto> {
    const { username, password } = loginUserDto;

    try {
      const user = await this.userModel.findOne({ username });

      if (!user) throw new UnauthorizedException('Invalid Credentials');

      // Authenticate the password
      const pwHash = await bcrypt.hash(password, user.salt);

      // Hashed pw do not match
      if (pwHash !== user.password)
        throw new UnauthorizedException('Invalid Credentials');

      // Validation complete, send token
      const payload = {
        username,
      };
      return {
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new InternalServerErrorException([error.message]);
    }
  }

  async registerUser(createUserDto: CreateUserDto): Promise<SendTokenDto> {
    const { firstName, lastName, password, username } = createUserDto;

    // Check to see if username already exists
    let newUser = await this.userModel.findOne({ username });

    if (newUser) throw new ConflictException(['Username already exists']);

    try {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      newUser = new this.userModel({
        firstName,
        lastName,
        username,
        password: hash,
        salt,
      });

      await newUser.save();

      const payload = {
        username,
      };

      return {
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new InternalServerErrorException([error.message]);
    }
  }
}
