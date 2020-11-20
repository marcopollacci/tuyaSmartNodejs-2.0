import { Test, TestingModule } from '@nestjs/testing';
import { ColorConversionService } from '../../../common/services/color-conversion/color-conversion.service';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';
import { NooieService } from './nooie.service';

describe('NooieService', () => {
  let service: NooieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NooieService, ContactTuyaService, ColorConversionService],
    }).compile();

    service = module.get<NooieService>(NooieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
