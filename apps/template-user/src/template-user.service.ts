import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateUserService {
  getHello(): string {
    return 'Hello World!';
  }
}
