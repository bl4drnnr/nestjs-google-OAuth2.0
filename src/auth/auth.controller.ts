import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  login() {
    return '';
  }

  @Get('google/redirect')
  redirect() {
    return '';
  }
}
