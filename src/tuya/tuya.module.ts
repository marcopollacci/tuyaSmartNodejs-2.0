import { Module } from '@nestjs/common';
import { TuyaController } from './controllers/tuya/tuya.controller';
import { TuyaService } from './services/tuya/tuya.service';

@Module({
  controllers: [TuyaController],
  providers: [TuyaService]
})
export class TuyaModule {}
