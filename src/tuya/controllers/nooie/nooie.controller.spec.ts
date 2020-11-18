import { Test, TestingModule } from '@nestjs/testing';
import { QueryNooieDeviceDTO } from '../../DTO/queryNooieDeviceDTO';
import { ColorConversionService } from '../../services/color-conversion/color-conversion.service';
import { TuyaService } from '../../services/tuya/tuya.service';
import { NooieController } from './nooie.controller';

describe('NooieController', () => {
  let controller: NooieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NooieController],
      providers: [QueryNooieDeviceDTO, TuyaService, ColorConversionService]
    }).compile();

    controller = module.get<NooieController>(NooieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

