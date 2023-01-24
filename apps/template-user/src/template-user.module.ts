import { Module } from '@nestjs/common';
import { TemplateUserController } from './template-user.controller';
import { TemplateUserService } from './template-user.service';

@Module({
  imports: [],
  controllers: [TemplateUserController],
  providers: [TemplateUserService],
})
export class TemplateUserModule {}
