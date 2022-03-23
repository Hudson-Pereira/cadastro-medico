import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadeService } from '../especialidade/especialidade.service';
import { EspecialidadeController } from '../especialidade/especialidade.controller';
import { Especialidade } from '../especialidade/entities/especialidade.entity';

const listaEspecialidade: Especialidade[] = [
  new Especialidade({ id: 1, nome: 'Primeiro' }),
  new Especialidade({ id: 2, nome: 'Segundo' }),
  new Especialidade({ id: 3, nome: 'Terceiro' }),
];

describe('EspecialidadeController', () => {
  let especialidadeController: EspecialidadeController;
  let especialidadeService: EspecialidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialidadeController],
      providers: [
        {
          provide: EspecialidadeService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn().mockResolvedValue(listaEspecialidade),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    especialidadeController = module.get<EspecialidadeController>(EspecialidadeController);
    especialidadeService = module.get<EspecialidadeService>(EspecialidadeService);
  });

  it('should be defined', () => {
    expect(especialidadeController).toBeDefined();
    expect(especialidadeService).toBeDefined();
  });

  describe('Testando buscas', () => {
    it('Deve retornar todos as especialidades.', async () => {
      const result = await especialidadeController.findAll();

      expect(result).toEqual(listaEspecialidade);
      expect(especialidadeService.findAll).toHaveBeenCalledTimes(1);
    });

    it('Deve quebrar e lançar uma exceção', () => {
      jest.spyOn(especialidadeService, 'findAll').mockRejectedValueOnce(new Error());

      expect(especialidadeService.findAll()).rejects.toThrowError();
    });
  });
});
