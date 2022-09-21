import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { SerializerUtil } from '../utils/serializer.util';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, SerializerUtil],
  imports: [TypeOrmModule.forFeature([User])]
})
export class AuthModule {}
