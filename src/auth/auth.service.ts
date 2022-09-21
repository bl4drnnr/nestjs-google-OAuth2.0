import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async validateUser({
    email,
    displayName
  }: {
    email: string;
    displayName: string;
  }) {
    let user = await this.userRepository.findOne({
      where: { email }
    });

    if (!user) user = await this.createUser({ email, displayName });

    return user;
  }

  async createUser({
    email,
    displayName
  }: {
    email: string;
    displayName: string;
  }) {
    return this.userRepository.create({ email, displayName });
  }
}
