import { Injectable } from '@nestjs/common';
import { QueryNooieDeviceDTO } from '../../../common/DTO/queryNooieDeviceDTO';
import { ColorConversionService } from '../../../common/services/color-conversion/color-conversion.service';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';

@Injectable()
export class NooieService {
  constructor(
    private colorConvSrv: ColorConversionService,
    private ContactTuyaSrv: ContactTuyaService,
  ) {}
  async triggerNooieDevice(queryParams: QueryNooieDeviceDTO) {
    let checkuse = false;

    if (queryParams.use === 'accendi') {
      checkuse = true;
    }
    const dataSet = {
      '20': checkuse,
    };

    if (queryParams.mode) {
      dataSet['21'] = queryParams.mode;
    }

    if (queryParams.dimmer) {
      dataSet['22'] = Number(queryParams.dimmer) * 10;
    }

    if (queryParams.temperature) {
      dataSet['23'] = Number(queryParams.temperature);
    }

    if (queryParams.colour) {
      dataSet['24'] = `${await this.colorConvSrv.RGBtoHSV(
        queryParams.colour,
      )}03e803e8`;
    }

    this.ContactTuyaSrv.doTrigger(queryParams, {
      multiple: true,
      data: dataSet,
    });
  }
}
