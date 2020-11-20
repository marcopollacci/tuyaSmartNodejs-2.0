import { Module } from '@nestjs/common';
import { LifxController } from './controllers/lifx/lifx.controller';
import { LifxService } from './services/lifx/lifx.service';

@Module({
  controllers: [LifxController],
  providers: [LifxService]
})
export class LifxModule {}
