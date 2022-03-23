import { Test, TestingModule } from '@nestjs/testing';
import { EspecialidadeService } from '../especialidade/especialidade.service';
import { EspecialidadeController } from '../especialidade/especialidade.controller';
import { Especialidade } from '../especialidade/entities/especialidade.entity';

const listaEspecialidade: Especialidade[] = [
  new Especialidade({ id: 1, nome: 'Primeiro' }),
  new Especialidade({ id: 2, nome: 'Segundo' }),
  new Especialidade({ id: 3, nome: 'Terceiro' }),
];

let especialidadeController: EspecialidadeController;
let especialidadeService: EspecialidadeService;
describe('EspecialidadeController', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspecialidadeController],
      providers: [
        {
          provide: EspecialidadeService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn().mockResolvedValue(listaEspecialidade),
            findOne: jest.fn().mockResolvedValue(listaEspecialidade[0]),
            update: jest.fn().mockResolvedValue(listaEspecialidade[1]),
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
});
describe('Testando buscas', () => {
  it('Deve retornar todas as especialidades.', async () => {
    const result = await especialidadeController.findAll();

    expect(result).toEqual(listaEspecialidade);
    expect(especialidadeService.findAll).toHaveBeenCalledTimes(1);
  });

  it('Deve quebrar e lançar uma exceção em busca geral', () => {
    jest.spyOn(especialidadeService, 'findAll').mockRejectedValueOnce(new Error());

    expect(especialidadeService.findAll()).rejects.toThrowError();
  });

  it('Busca de um item por id', async () => {
    const result = await especialidadeService.findOne(1);

    expect(result).toEqual(listaEspecialidade[0]);
  });

  it('Deve quebrar e lançar uma exceção em busca por id não existente', async () => {
    jest.spyOn(especialidadeService, 'findOne').mockRejectedValueOnce(new Error());

    expect(especialidadeService.findOne(null)).rejects.toThrowError();
  });
});
