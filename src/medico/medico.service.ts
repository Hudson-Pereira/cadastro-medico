import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMedicoDto } from './dto/update-medico.dto';

function vazio() {
  throw new HttpException('Nenhum item encontrado.', HttpStatus.NOT_FOUND);
}
function erroCadastro(error) {
  console.error(error.message);
  throw new HttpException(
    'Erro ao cadastrar, verifique os dados e tente novamente.',
    HttpStatus.BAD_REQUEST,
  );
}

@Injectable()
export class MedicoService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.MedicoCreateInput) {
    try {
      const medico = await this.prisma.medico.create({ data });
      return [`Médico ${medico.nome} cadastrado com sucesso.`, medico];
    } catch (error) {
      erroCadastro(error);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.medico.findMany({});
      if (total.length == 0) {
        vazio();
      }
      return [`${total.length} médicos cadastrados.`, total];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findOne(id: number) {
    try {
      const doutor = await this.prisma.medico.findUnique({ where: { id } });
      const especialista = await this.prisma.especialista.findMany({
        where: { medico: id },
      });
      if (!doutor || !especialista) {
        vazio();
      }
      return [doutor, especialista];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findName(nome: string) {
    try {
      const medico = await this.prisma.medico.findUnique({
        where: { nome },
      });
      if (!medico) {
        console.log(medico);
        vazio();
      }
      return medico;
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async update(id: number, _updateMedicoDto: UpdateMedicoDto) {
    try {
      const medico = await this.prisma.medico.update({
        data: { ..._updateMedicoDto },
        where: { id },
      });
      if (!medico) {
        vazio();
      }
      return medico;
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async remove(id: number) {
    try {
      const medico = await this.prisma.medico.delete({ where: { id } });
      if (!medico) {
        vazio();
      }
      return [`Excluído com sucesso`, medico];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }
}
