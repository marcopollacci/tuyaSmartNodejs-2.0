import { Controller, Get, Query } from '@nestjs/common';
import { QuerySingleDeviceDTO } from 'src/tuya/DTO/querySingleDeviceDTO';
import { TuyaService } from 'src/tuya/services/tuya/tuya.service';

@Controller('tuya')
export class TuyaController {

    constructor(
        private tuaSrv: TuyaService
    ){}

    @Get('single')
    async singleDevice(
        @Query() query: QuerySingleDeviceDTO
    ): Promise<object> {

        return query;

    }

}
