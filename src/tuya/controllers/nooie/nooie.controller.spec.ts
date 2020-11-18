import { Test, TestingModule } from '@nestjs/testing';
import { NooieController } from './nooie.controller';

describe('NooieController', () => {
  let controller: NooieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NooieController],
    }).compile();

    controller = module.get<NooieController>(NooieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
