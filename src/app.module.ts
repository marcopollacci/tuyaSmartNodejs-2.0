import { Module } from '@nestjs/common';
import { TuyaModule } from './tuya/tuya.module';
import { NooieModule } from './nooie/nooie.module';
import { CommonModule } from './common/common.module';
import { LifxModule } from './lifx/lifx.module';
import { BroadlinkModule } from './broadlink/broadlink.module';

@Module({
  imports: [TuyaModule, NooieModule, CommonModule, LifxModule, BroadlinkModule],
})
export class AppModule {}
