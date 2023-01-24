import { Module } from '@nestjs/common';
import { ManagementSystemController } from './management-system.controller';
import { ManagementSystemService } from './management-system.service';

@Module({
  imports: [],
  controllers: [ManagementSystemController],
  providers: [ManagementSystemService],
})
export class ManagementSystemModule {}
