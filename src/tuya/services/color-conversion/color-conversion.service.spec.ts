import { Test, TestingModule } from '@nestjs/testing';
import { ColorConversionService } from './color-conversion.service';

describe('ColorConversionService', () => {
  let service: ColorConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorConversionService],
    }).compile();

    service = module.get<ColorConversionService>(ColorConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
