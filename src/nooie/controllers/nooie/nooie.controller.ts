import { Controller, Get, Query } from '@nestjs/common';
import { QueryNooieDeviceDTO } from '../../../common/DTO/queryNooieDeviceDTO';
import { NooieService } from '../../services/nooie/nooie.service';

@Controller('nooie')
export class NooieController {
  constructor(private nooieSrv: NooieService) {}

  @Get()
  async singleDevice(
    @Query() query: QueryNooieDeviceDTO,
  ): Promise<QueryNooieDeviceDTO> {
    this.nooieSrv.triggerNooieDevice(query);
    return query;
  }
}
