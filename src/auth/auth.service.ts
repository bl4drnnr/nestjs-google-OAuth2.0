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
    const user = await this.userRepository.findOneBy({ email });
    if (user) return user;
    const newUser = this.userRepository.create({ email, displayName });
    return this.userRepository.save(newUser);
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

  async findOne({ email }: { email: string }) {
    return this.userRepository.findOneBy({ email });
  }
}
