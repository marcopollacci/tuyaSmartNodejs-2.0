import {
  HttpException,
  HttpStatus,
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import * as service from '../../../../config/service';
import { QueryLifxDTO } from '../../../common/DTO/queryLifxDTO';
import { LifxService } from '../../services/lifx/lifx.service';

@Controller('lifx')
export class LifxController {
  constructor(private lifxSrv: LifxService) {}

  @Get('bulb')
  async singleDevice(@Query() query: QueryLifxDTO): Promise<QueryLifxDTO> {
    if (!service.MODULE_ENABLE.lifx) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'MODULE LIFX NOT ACTIVE',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    await this.lifxSrv.triggerLifxDevice(query);
    return query;
  }
}
