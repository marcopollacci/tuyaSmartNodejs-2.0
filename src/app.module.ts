import { Module } from '@nestjs/common';
import { TuyaModule } from './tuya/tuya.module';

@Module({
  imports: [TuyaModule],
})
export class AppModule {}
