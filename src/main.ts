import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001); // Puerto cambiado a 3001 para dejar libre el 3000 al frontend
}
bootstrap();
