import { Module } from '@nestjs/common'
import { UsersModule } from './service/user/users.module'

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class UserServerModule {}
