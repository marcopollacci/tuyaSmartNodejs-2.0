import { Module } from '@nestjs/common';
import { TuyaModule } from './tuya/tuya.module';
import { NooieModule } from './nooie/nooie.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TuyaModule, NooieModule, CommonModule],
})
export class AppModule {}
