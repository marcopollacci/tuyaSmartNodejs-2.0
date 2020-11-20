import { Module } from '@nestjs/common';
import { TuyaModule } from './tuya/tuya.module';
import { NooieModule } from './nooie/nooie.module';
import { CommonModule } from './common/common.module';
import { LifxModule } from './lifx/lifx.module';

@Module({
  imports: [TuyaModule, NooieModule, CommonModule, LifxModule],
})
export class AppModule {}
