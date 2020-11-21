import { Test, TestingModule } from '@nestjs/testing';
import { BroadlinkService } from './broadlink.service';

describe('BroadlinkService', () => {
  let service: BroadlinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BroadlinkService],
    }).compile();

    service = module.get<BroadlinkService>(BroadlinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
