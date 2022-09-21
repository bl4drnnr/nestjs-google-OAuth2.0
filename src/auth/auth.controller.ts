import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  login() {
    return '';
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  redirect() {
    return '';
  }
}
