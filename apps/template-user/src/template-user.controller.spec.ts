import { Test, TestingModule } from '@nestjs/testing';
import { TemplateUserController } from './template-user.controller';
import { TemplateUserService } from './template-user.service';

describe('TemplateUserController', () => {
  let templateUserController: TemplateUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TemplateUserController],
      providers: [TemplateUserService],
    }).compile();

    templateUserController = app.get<TemplateUserController>(
      TemplateUserController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(templateUserController.getHello()).toBe('Hello World!');
    });
  });
});
