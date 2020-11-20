import { Module } from '@nestjs/common';
import { ColorConversionService } from '../common/services/color-conversion/color-conversion.service';
import { ContactTuyaService } from '../common/services/contact-tuya/contact-tuya.service';
import { NooieController } from './controllers/nooie/nooie.controller';
import { NooieService } from './services/nooie/nooie.service';

@Module({
  controllers: [NooieController],
  providers: [NooieService, ContactTuyaService, ColorConversionService],
})
export class NooieModule {}
