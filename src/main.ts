import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //it's stripping out the element that is not defined in dto
    }),
  );
  await app.listen(3333);
}
bootstrap();

//npx prisma migrate dev ,,ayc commandy chi arvel 
