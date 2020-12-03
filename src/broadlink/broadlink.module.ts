import { Module } from '@nestjs/common';
import { BroadlinkController } from './controllers/broadlink/broadlink.controller';
import { BroadlinkService } from './services/broadlink/broadlink.service';
import { ExecuteService } from './services/execute/execute.service';

@Module({
  controllers: [BroadlinkController],
  providers: [BroadlinkService, ExecuteService]
})
export class BroadlinkModule {}
