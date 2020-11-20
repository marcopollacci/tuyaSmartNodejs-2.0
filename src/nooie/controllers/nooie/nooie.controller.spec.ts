import { Test, TestingModule } from '@nestjs/testing';
import { ColorConversionService } from '../../../common/services/color-conversion/color-conversion.service';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';
import { NooieService } from '../../services/nooie/nooie.service';
import { NooieController } from './nooie.controller';

describe('NooieController', () => {
  let controller: NooieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NooieController],
      providers: [NooieService, ColorConversionService, ContactTuyaService],
    }).compile();

    controller = module.get<NooieController>(NooieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
