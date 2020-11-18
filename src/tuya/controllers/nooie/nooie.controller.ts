import { Controller, Get, Query } from '@nestjs/common';
import { QueryNooieDeviceDTO } from '../../DTO/queryNooieDeviceDTO';
import { TuyaService } from '../../services/tuya/tuya.service';


@Controller('nooie')
export class NooieController {
    constructor(
        private tuyaSrv: TuyaService
    ){}

    @Get()
    async singleDevice(
        @Query() query: QueryNooieDeviceDTO
    ): Promise<object> {
        this.tuyaSrv.triggerNooieDevice(query);
        return query;
    }
}
