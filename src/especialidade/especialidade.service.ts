import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Injectable()
export class EspecialidadeService {
  create(createEspecialidadeDto: CreateEspecialidadeDto) {
    return 'This action adds a new especialidade';
  }

  findAll() {
    return `This action returns all especialidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especialidade`;
  }

  update(id: number, updateEspecialidadeDto: UpdateEspecialidadeDto) {
    return `This action updates a #${id} especialidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} especialidade`;
  }
}
