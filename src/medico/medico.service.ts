import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMedicoDto } from './dto/update-medico.dto';

function vazio() {
  throw new HttpException('Faltam dados.', HttpStatus.BAD_REQUEST);
}
function erro(error) {
  console.error(error);
  throw new HttpException(
    'Erro ao cadastrar, tente novamente.',
    HttpStatus.BAD_REQUEST,
  );
}
@Injectable()
export class MedicoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MedicoCreateInput) {
    try {
      const medico = await this.prisma.medico.create({ data });
      if (
        !medico.nome ||
        !medico.CRM ||
        !medico.telefone ||
        !medico.celular ||
        !medico.CEP
      ) {
        vazio;
      }
      return medico;
    } catch (error) {
      erro(error);
    }
  }

  findAll() {
    return `This action returns all medico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
