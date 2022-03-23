import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEspecialistaDto } from './dto/update-especialista.dto';

function vazio() {
  throw new HttpException('Nenhum item encontrado.', HttpStatus.NOT_FOUND);
}
function erroCadastro(error) {
  console.error(error.message);
  throw new HttpException('Erro, verifique os dados e tente novamente.', HttpStatus.BAD_REQUEST);
}

@Injectable()
export class EspecialistaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EspecialistaUncheckedCreateInput) {
    try {
      const especialista = await this.prisma.especialista.create({ data });
      return [`Especialista ${especialista.medico} cadastrado com sucesso.`, especialista];
    } catch (error) {
      erroCadastro(error);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.especialista.findMany({});
      if (total.length === 0) {
        vazio();
      }
      return [`${total.length} especialistas cadastrados.`, total];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findOne(id: number) {
    try {
      const especialista = await this.prisma.especialista.findUnique({
        where: { id },
      });
      if (!especialista) {
        vazio();
      }
      return especialista;
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async update(id: number, _updateEspecialistaDto: UpdateEspecialistaDto) {
    try {
      const especialista = await this.prisma.especialista.update({
        data: { ..._updateEspecialistaDto },
        where: { id },
      });
      if (!especialista) {
        vazio();
      }
      return [`Especialista ${especialista.medico} alterado com sucesso`, especialista];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async remove(id: number) {
    try {
      const especialista = await this.prisma.especialista.delete({
        where: { id },
      });
      if (!especialista) {
        vazio();
      }
      return [`Excluído com sucesso`, especialista];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }
}
