import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  await app.listen(3000, () => {
    console.log(`Server has been successfully started on port ${PORT}`);
  });
}
bootstrap();
