import { Injectable, Logger } from '@nestjs/common';
import { QuerySingleDeviceDTO } from 'src/tuya/DTO/querySingleDeviceDTO';
import * as TuyAPI from 'tuyapi';
import { operation } from 'retry';
import { QueryMultipleDeviceDTO } from 'src/tuya/DTO/queryMultipleDeviceDTO';
import { IDataTuya, ISetData } from 'src/interfaces/dataTuya.interface';
import { QueryNooieDeviceDTO } from 'src/tuya/DTO/queryNooieDeviceDTO';
import { ColorConversionService } from '../color-conversion/color-conversion.service';
@Injectable()
export class TuyaService {
  private readonly logger = new Logger(TuyaService.name);

  constructor(private colorConvSrv: ColorConversionService) {}

  triggerSingleDevice(queryParams: QuerySingleDeviceDTO) {
    let checkuse = false;

    if (queryParams.use === 'accendi') {
      checkuse = true;
    }

    this.doTrigger(queryParams, {
      set: checkuse,
    });
  }

  triggerMultipleDevice(queryParams: QueryMultipleDeviceDTO) {
    let checkuse = false;

    if (queryParams.use === 'accendi') {
      checkuse = true;
    }

    this.doTrigger(queryParams, {
      multiple: true,
      data: {
        [queryParams.subdevice]: checkuse,
      },
    });
  }

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

    this.doTrigger(queryParams, {
      multiple: true,
      data: dataSet,
    });
  }

  private async doTrigger(
    queryParams:
      | QuerySingleDeviceDTO
      | QueryMultipleDeviceDTO
      | QueryNooieDeviceDTO,
    objectSet: ISetData,
  ): Promise<void> {
    const device = this.generateConnectionTuya(queryParams.id, queryParams.key);
    this.logger.log('objectSet', JSON.stringify(objectSet));
    device.on('data', (data: IDataTuya) => {
      if (typeof data !== 'undefined') {
        const cambio_stato = new Promise((resolve) => {
          device.set(objectSet);
          resolve('ok!');
        });

        cambio_stato.then(() => {
          device.disconnect();
        });
      }
    });
  }

  generateConnectionTuya(id: string, key: string): any {
    const device = new TuyAPI({
      id: id,
      key: key,
    });

    const oper = operation({
      retries: 5,
    });

    oper.attempt(() => {
      //retry if error socket connect
      // Find device on network
      device
        .find()
        .then(() => {
          // Connect to device
          device.connect().catch((reason) => {
            this.logger.error(reason);
            if (oper.retry(reason)) {
              return;
            }
          });
        })
        .catch((reason) => {
          this.logger.error(reason);
          if (oper.retry(reason)) {
            return;
          }
        });

      // Add event listeners
      device.on('connected', () => {
        this.logger.log('Connected to device!');
      });

      device.on('disconnected', () => {
        this.logger.log('Disconnected from device.');
      });

      device.on('error', (error) => {
        this.logger.error(error);
        if (oper.retry(error)) {
          return;
        }
      });
    });
    return device;
  }
}
