import { Module } from '@nestjs/common';
import { ContactTuyaService } from '../common/services/contact-tuya/contact-tuya.service';
import { TuyaController } from './controllers/tuya/tuya.controller';
import { TuyaService } from './services/tuya/tuya.service';

@Module({
  controllers: [TuyaController],
  providers: [TuyaService, ContactTuyaService],
})
export class TuyaModule {}
