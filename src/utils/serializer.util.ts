/* eslint-disable @typescript-eslint/ban-types */
import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { User } from '../entities/user.entity';

@Injectable()
export class SerializerUtil extends PassportSerializer {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super();
  }
  serializeUser(user: User, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.authService.findOne({ id: payload.id });
    return user ? done(null, user) : done(null, null);
  }
}
