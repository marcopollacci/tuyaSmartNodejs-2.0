import { Test, TestingModule } from '@nestjs/testing';
import { ContactTuyaService } from '../../../common/services/contact-tuya/contact-tuya.service';
import { TuyaService } from '../../services/tuya/tuya.service';
import { TuyaController } from './tuya.controller';
import { QuerySingleDeviceDTO } from '../../../common/DTO/querySingleDeviceDTO';
import { QueryMultipleDeviceDTO } from '../../../common/DTO/queryMultipleDeviceDTO';

describe('TuyaController', () => {
  let controller: TuyaController;
  let service: TuyaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuyaController],
      providers: [ContactTuyaService, TuyaService],
    }).compile();

    controller = module.get<TuyaController>(TuyaController);
    service = module.get<TuyaService>(TuyaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('SingleDevice: should pass correct query params', async () => {
    const queryParam = new QuerySingleDeviceDTO();
    jest.spyOn(service, 'triggerSingleDevice').mockResolvedValue(null);
    expect(await controller.singleDevice(queryParam)).toBeInstanceOf(
      QuerySingleDeviceDTO,
    );
  });

  it('MultipleDevice: should pass correct query params', async () => {
    const queryParam = new QueryMultipleDeviceDTO();
    jest.spyOn(service, 'triggerSingleDevice').mockResolvedValue(null);
    expect(await controller.singleDevice(queryParam)).toBeInstanceOf(
      QueryMultipleDeviceDTO,
    );
  });
});
