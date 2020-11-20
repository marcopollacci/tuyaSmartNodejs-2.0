import { Test, TestingModule } from '@nestjs/testing';
import { MODULE_ENABLE } from '../../../../config/service';
import { LifxService } from '../../services/lifx/lifx.service';
import { LifxController } from './lifx.controller';

describe('LifxController', () => {
  let controller: LifxController;

  beforeEach(async () => {
    MODULE_ENABLE.lifx = false;
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifxController],
      providers: [LifxService],
    }).compile();

    controller = module.get<LifxController>(LifxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
