import { Controller, Get, Query } from '@nestjs/common';
import { QueryMultipleDeviceDTO } from '../../../common/DTO/queryMultipleDeviceDTO';
import { QuerySingleDeviceDTO } from '../../../common/DTO/querySingleDeviceDTO';
import { TuyaService } from '../../services/tuya/tuya.service';

@Controller('tuya')
export class TuyaController {
  constructor(private tuyaSrv: TuyaService) {}

  @Get('single')
  async singleDevice(
    @Query() query: QuerySingleDeviceDTO,
  ): Promise<QuerySingleDeviceDTO> {
    await this.tuyaSrv.triggerSingleDevice(query);
    return query;
  }

  @Get('multiple')
  async multipleDevice(
    @Query() query: QueryMultipleDeviceDTO,
  ): Promise<QueryMultipleDeviceDTO> {
    await this.tuyaSrv.triggerMultipleDevice(query);
    return query;
  }
}
