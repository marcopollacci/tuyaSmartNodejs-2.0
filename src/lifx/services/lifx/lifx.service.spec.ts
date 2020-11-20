import { Test, TestingModule } from '@nestjs/testing';
import { MODULE_ENABLE } from '../../../../config/service';
import { LifxService } from './lifx.service';

describe('LifxService', () => {
  let service: LifxService;

  beforeEach(async () => {
    MODULE_ENABLE.lifx = false;
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifxService],
    }).compile();

    service = module.get<LifxService>(LifxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
