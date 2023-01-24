import { NestFactory } from '@nestjs/core';
import { TemplateUserModule } from './template-user.module';

async function bootstrap() {
  const app = await NestFactory.create(TemplateUserModule);
  await app.listen(7001);
}
bootstrap();
