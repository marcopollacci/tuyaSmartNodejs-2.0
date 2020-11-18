import { Test, TestingModule } from '@nestjs/testing';
import { TuyaService } from './tuya.service';

describe('TuyaService', () => {
  let service: TuyaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuyaService],
    }).compile();

    service = module.get<TuyaService>(TuyaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
