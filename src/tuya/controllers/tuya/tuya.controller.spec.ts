import { Test, TestingModule } from '@nestjs/testing';
import { TuyaController } from './tuya.controller';

describe('TuyaController', () => {
  let controller: TuyaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuyaController],
    }).compile();

    controller = module.get<TuyaController>(TuyaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
