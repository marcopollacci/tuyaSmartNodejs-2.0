import { Test, TestingModule } from '@nestjs/testing';
import { ContactTuyaService } from './contact-tuya.service';

describe('ContactTuyaService', () => {
  let service: ContactTuyaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactTuyaService],
    }).compile();

    service = module.get<ContactTuyaService>(ContactTuyaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
