import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async registerUser(createUserDto: CreateUserDto): Promise<void> {
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
    } catch (error) {
      throw new InternalServerErrorException([error.message]);
    }
  }
}
