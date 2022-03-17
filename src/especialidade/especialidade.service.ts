import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

function vazio() {
  throw new HttpException('Nenhum item encontrado.', HttpStatus.NOT_FOUND);
}

function erroCadastro(error) {
  console.error(error.message);
  throw new HttpException(
    'Erro ao cadastrar, tente novamente.',
    HttpStatus.BAD_REQUEST,
  );
}
@Injectable()
export class EspecialidadeService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EspecialidadeCreateInput) {
    try {
      const especialidade = await this.prisma.especialidade.create({ data });
      return [
        `Especialidade ${especialidade.nome} criada com sucesso.`,
        especialidade,
      ];
    } catch (error) {
      erroCadastro(error);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.especialidade.findMany({});
      if (total.length === 0) {
        vazio();
      }
      return [`${total.length} especialidades cadastradas.`, total];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findOne(id: number) {
    try {
      const especialidade = await this.prisma.especialidade.findUnique({
        where: { id },
      });
      if (!especialidade) {
        vazio();
      }
      return especialidade;
    } catch (error) {
      console.error(error);
      vazio();
    }
  }

  async update(id: number, _updateEspecialidadeDto: UpdateEspecialidadeDto) {
    try {
      const especialidade = await this.prisma.especialidade.update({
        data: { ..._updateEspecialidadeDto },
        where: { id },
      });
      if (!especialidade) {
        vazio();
      }
    } catch (error) {
      console.log(error.message);
      vazio();
    }
  }

  async remove(id: number) {
    try {
      const especialidade = await this.prisma.especialidade.delete({
        where: { id },
      });
      if (!especialidade) {
        vazio();
      }
      return [`Excluído com sucesso.`, especialidade];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }
}
