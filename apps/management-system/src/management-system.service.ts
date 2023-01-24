import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagementSystemService {
  getHello(): string {
    return 'Hello World!';
  }
}
