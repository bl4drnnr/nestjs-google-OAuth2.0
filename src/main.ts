import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000, () => {
    console.log(`Server has been successfully started on port ${PORT}`);
  });
}
bootstrap();
