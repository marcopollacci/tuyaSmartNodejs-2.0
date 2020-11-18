import { Module } from '@nestjs/common';
import { TuyaController } from './controllers/tuya/tuya.controller';
import { TuyaService } from './services/tuya/tuya.service';
import { NooieController } from './controllers/nooie/nooie.controller';
import { ColorConversionService } from './services/color-conversion/color-conversion.service';

@Module({
  controllers: [TuyaController, NooieController],
  providers: [TuyaService, ColorConversionService]
})
export class TuyaModule {}
