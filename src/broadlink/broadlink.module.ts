import { Module } from '@nestjs/common';
import { BroadlinkController } from './controllers/broadlink/broadlink.controller';
import { BroadlinkService } from './services/broadlink/broadlink.service';

@Module({
  controllers: [BroadlinkController],
  providers: [BroadlinkService]
})
export class BroadlinkModule {}
