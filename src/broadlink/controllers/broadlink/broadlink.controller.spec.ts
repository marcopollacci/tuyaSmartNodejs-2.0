import { Test, TestingModule } from '@nestjs/testing';
import { BroadlinkController } from './broadlink.controller';

describe('BroadlinkController', () => {
  let controller: BroadlinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BroadlinkController],
    }).compile();

    controller = module.get<BroadlinkController>(BroadlinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
