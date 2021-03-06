import { Injectable } from '@nestjs/common';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';
import { QueryMultipleDeviceDTO } from '../../../common/DTO/queryMultipleDeviceDTO';
import { QuerySingleDeviceDTO } from '../../../common/DTO/querySingleDeviceDTO';
@Injectable()
export class TuyaService {
  constructor(private ContactTuyaSrv: ContactTuyaService) {}

  async triggerSingleDevice(queryParams: QuerySingleDeviceDTO) {
    let checkuse = false;

    if (queryParams.use === 'accendi') {
      checkuse = true;
    }

    await this.ContactTuyaSrv.doTrigger(queryParams, {
      set: checkuse,
    });
  }

  async triggerMultipleDevice(queryParams: QueryMultipleDeviceDTO) {
    let checkuse = false;

    if (queryParams.use === 'accendi') {
      checkuse = true;
    }

    await this.ContactTuyaSrv.doTrigger(queryParams, {
      multiple: true,
      data: {
        [queryParams.subdevice]: checkuse,
      },
    });
  }
}
