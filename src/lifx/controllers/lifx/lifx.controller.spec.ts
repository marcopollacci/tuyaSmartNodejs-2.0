import { Test, TestingModule } from '@nestjs/testing';
import { MODULE_ENABLE } from '../../../../config/service';
import { LifxService } from '../../services/lifx/lifx.service';
import { LifxController } from './lifx.controller';
import { QueryLifxDTO } from '../../../common/DTO/queryLifxDTO';
import { HttpException } from '@nestjs/common';

describe('LifxController', () => {
  let controller: LifxController;
  let srv: LifxService;

  beforeEach(async () => {
    MODULE_ENABLE.lifx = false; // avoid instance of UDP Lifx Server (maybe can improve service)
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifxController],
      providers: [LifxService],
    }).compile();

    controller = module.get<LifxController>(LifxController);
    srv = module.get<LifxService>(LifxService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('SingleDevice: Error if not enable', async () => {
    const queryParam = new QueryLifxDTO();
    jest.spyOn(srv, 'triggerLifxDevice').mockResolvedValue(null);
    try {
      expect(await controller.singleDevice(queryParam));
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
    }
  });

  it('SingleDevice: should pass correct query params', async () => {
    MODULE_ENABLE.lifx = true;
    jest.spyOn(srv, 'triggerLifxDevice').mockResolvedValue(null);
    const queryParam = new QueryLifxDTO();
    expect(await controller.singleDevice(queryParam)).toBeInstanceOf(
      QueryLifxDTO,
    );
  });
});
