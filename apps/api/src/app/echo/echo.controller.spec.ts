import { Test, TestingModule } from '@nestjs/testing';
import { EchoController } from './echo.controller';

describe('Echo Controller', () => {
  let controller: EchoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EchoController]
    }).compile();

    controller = module.get<EchoController>(EchoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
