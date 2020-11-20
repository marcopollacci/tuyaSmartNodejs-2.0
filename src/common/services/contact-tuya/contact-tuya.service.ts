import { Injectable, Logger } from '@nestjs/common';
import * as TuyAPI from 'tuyapi';
import { operation } from 'retry';
import { IDataTuya, ISetData } from 'src/interfaces/dataTuya.interface';
import { QueryMultipleDeviceDTO } from '../../DTO/queryMultipleDeviceDTO';
import { QueryNooieDeviceDTO } from '../../DTO/queryNooieDeviceDTO';
import { QuerySingleDeviceDTO } from '../../DTO/querySingleDeviceDTO';

@Injectable()
export class ContactTuyaService {
  private readonly logger = new Logger(ContactTuyaService.name);

  async doTrigger(
    queryParams:
      | QuerySingleDeviceDTO
      | QueryMultipleDeviceDTO
      | QueryNooieDeviceDTO,
    objectSet: ISetData,
  ): Promise<void> {
    const device = this.generateConnectionTuya(queryParams.id, queryParams.key);
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
