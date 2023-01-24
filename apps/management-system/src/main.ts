import { NestFactory } from '@nestjs/core';
import { ManagementSystemModule } from './management-system.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagementSystemModule);
  await app.listen(7000);
}
bootstrap();
