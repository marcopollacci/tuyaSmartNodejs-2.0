import { Test, TestingModule } from '@nestjs/testing';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';
import { TuyaService } from '../../services/tuya/tuya.service';
import { TuyaController } from './tuya.controller';

describe('TuyaController', () => {
  let controller: TuyaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuyaController],
      providers: [ContactTuyaService, TuyaService],
    }).compile();

    controller = module.get<TuyaController>(TuyaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
