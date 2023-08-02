import { NestFactory } from '@nestjs/core'
import { UserServerModule } from './user-server.module'
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(UserServerModule)
  await app.listen(3000)
}

bootstrap()
