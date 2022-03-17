import { Test, TestingModule } from '@nestjs/testing';
import { EspecialistaController } from './especialista.controller';
import { EspecialistaService } from './especialista.service';

describe('EspecialistaController', () => {
  let controller: EspecialistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialistaController],
      providers: [EspecialistaService],
    }).compile();

    controller = module.get<EspecialistaController>(EspecialistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
