import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(): Promise<void> {
    const user = new this.userModel({ name: 'mango' });
    await user.save();

    console.log(await this.userModel.find().exec());
  }
}
