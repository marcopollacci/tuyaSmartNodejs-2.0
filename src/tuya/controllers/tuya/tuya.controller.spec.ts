import { Test, TestingModule } from '@nestjs/testing';
import { QueryMultipleDeviceDTO } from '../../DTO/queryMultipleDeviceDTO';
import { QuerySingleDeviceDTO } from '../../DTO/querySingleDeviceDTO';
import { ColorConversionService } from '../../services/color-conversion/color-conversion.service';
import { TuyaService } from '../../services/tuya/tuya.service';
import { TuyaController } from './tuya.controller';

describe('TuyaController', () => {
  let controller: TuyaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuyaController],
      providers: [QuerySingleDeviceDTO, QueryMultipleDeviceDTO, TuyaService, ColorConversionService]
    }).compile();

    controller = module.get<TuyaController>(TuyaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
