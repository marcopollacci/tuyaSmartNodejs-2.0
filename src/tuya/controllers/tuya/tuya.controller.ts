import { Controller, Get, Query } from '@nestjs/common';
import { QueryMultipleDeviceDTO } from 'src/tuya/DTO/queryMultipleDeviceDTO';
import { QuerySingleDeviceDTO } from 'src/tuya/DTO/querySingleDeviceDTO';
import { TuyaService } from 'src/tuya/services/tuya/tuya.service';

@Controller('tuya')
export class TuyaController {

    constructor(
        private tuyaSrv: TuyaService
    ){}

    @Get('single')
    async singleDevice(
        @Query() query: QuerySingleDeviceDTO
    ): Promise<object> {
        this.tuyaSrv.triggerSingleDevice(query);
        return query;
    }

    @Get('multiple')
    async multipleDevice(
        @Query() query: QueryMultipleDeviceDTO
    ): Promise<object> {
        this.tuyaSrv.triggerMultipleDevice(query);
        return query;
    }

}
