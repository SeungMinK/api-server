import { Controller, Get } from '@nestjs/common';
import { TemplateUserService } from './template-user.service';

@Controller()
export class TemplateUserController {
  constructor(private readonly templateUserService: TemplateUserService) {}

  @Get()
  getHello(): string {
    return this.templateUserService.getHello();
  }
}
