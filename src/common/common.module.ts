import { Module } from '@nestjs/common';
import { ColorConversionService } from './services/color-conversion/color-conversion.service';
import { ContactTuyaService } from './services/contact-tuya/contact-tuya.service';

@Module({
  providers: [ContactTuyaService, ColorConversionService],
})
export class CommonModule {}
