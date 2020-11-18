import { Test, TestingModule } from '@nestjs/testing';
import { ColorConversionService } from '../color-conversion/color-conversion.service';
import { TuyaService } from './tuya.service';

describe('TuyaService', () => {
  let service: TuyaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuyaService, ColorConversionService],
    }).compile();

    service = module.get<TuyaService>(TuyaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

