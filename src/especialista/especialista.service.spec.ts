import { Test, TestingModule } from '@nestjs/testing';
import { EspecialistaService } from './especialista.service';

describe('EspecialistaService', () => {
  let service: EspecialistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspecialistaService],
    }).compile();

    service = module.get<EspecialistaService>(EspecialistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
