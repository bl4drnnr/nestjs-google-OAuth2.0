/* eslint-disable @typescript-eslint/ban-types */
import { PassportSerializer } from '@nestjs/passport';
import { Inject } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { User } from '../entities/user.entity';

export class SerializerUtil extends PassportSerializer {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {
    super();
  }
  serializeUser(user: User, done: Function): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: Function): any {
    const user = this.authService.findOne({ id: payload.id });
    return user ? done(null, user) : done(null, null);
  }
}
