import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import * as service from '../../../../config/service';
import LifxClient = require('node-lifx');
import { QueryLifxDTO } from '../../../common/DTO/queryLifxDTO';

@Injectable()
export class LifxService {
  private readonly logger = new Logger(LifxService.name);
  client: any;
  constructor() {
    if (service.MODULE_ENABLE.lifx) {
      this.client = new LifxClient.Client();
      this.startUpLifx();
    }
  }

  async triggerLifxDevice(query: QueryLifxDTO): Promise<void> {
    const light = this.client.light(query.light);
    const percentuale = 'percentual' in query ? query.percentual : 0;
    switch (query.state) {
      case 'ON':
        light.on();
        break;
      case 'OFF':
        light.off();
        break;
      case 'DIM':
        light.color(0, 0, Number(percentuale), 2500, 1000);
        break;
    }
  }

  private startUpLifx(): void {
    this.client.on('light-new', (light) => {
      this.logger.log('New light found.');
      this.logger.log('ID: ' + light.id);
      this.logger.log('IP: ' + light.address + ':' + light.port);
      light.getState((err, info) => {
        if (err) {
          this.logger.error(JSON.stringify(err));
        }
        this.logger.log(`Label: ' + ${info.label}`);
        this.logger.log(`Power: + ${info.power === 1 ? 'on' : 'off'}`);
        this.logger.log(`Color: ${JSON.stringify(info.color)}`);
      });

      light.getHardwareVersion((err, info) => {
        if (err) {
          this.logger.error(JSON.stringify(err));
        }
        this.logger.log(
          'Device Info: ' + info.vendorName + ' - ' + info.productName,
        );
        this.logger.log(`Features: ${info.productFeatures}`);
      });
    });

    this.client.on('light-online', (light) => {
      this.logger.log(
        'Light back online. ID:' +
          light.id +
          ', IP:' +
          light.address +
          ':' +
          light.port +
          '\n',
      );
    });

    this.client.on('light-offline', (light) => {
      this.logger.log(
        'Light offline. ID:' +
          light.id +
          ', IP:' +
          light.address +
          ':' +
          light.port +
          '\n',
      );
    });
    this.client.init();
  }
}
