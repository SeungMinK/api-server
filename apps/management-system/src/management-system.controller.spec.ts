import { Test, TestingModule } from '@nestjs/testing';
import { ManagementSystemController } from './management-system.controller';
import { ManagementSystemService } from './management-system.service';

describe('ManagementSystemController', () => {
  let managementSystemController: ManagementSystemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManagementSystemController],
      providers: [ManagementSystemService],
    }).compile();

    managementSystemController = app.get<ManagementSystemController>(
      ManagementSystemController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(managementSystemController.getHello()).toBe('Hello World!');
    });
  });
});
