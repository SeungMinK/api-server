import { Controller, Get } from '@nestjs/common';
import { ManagementSystemService } from './management-system.service';

@Controller()
export class ManagementSystemController {
  constructor(
    private readonly managementSystemService: ManagementSystemService,
  ) {}

  @Get()
  getHello(): string {
    return this.managementSystemService.getHello();
  }
}
