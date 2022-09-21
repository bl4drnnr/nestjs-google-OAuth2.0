import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../guards/google-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  login() {
    return { msg: 'Google OAuth2.0 Authentication' };
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  redirect() {
    return { msg: 'OK - Endpoint to redirect' };
  }

  @Get('google/status')
  userStatus(@Req() request: Request) {
    return request.user ? request.user : { msg: 'Not authenticated' };
  }
}
