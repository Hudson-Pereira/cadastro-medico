import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import fetch from 'node-fetch';

function vazio() {
  throw new HttpException('Nenhum item encontrado.', HttpStatus.NOT_FOUND);
}

function erroCadastro(error) {
  console.error(error.message);
  throw new HttpException(
    'Erro, verifique os dados e tente novamente.',
    HttpStatus.BAD_REQUEST,
  );
}

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EnderecoCreateInput) {
    try {
      const end = await this.prisma.endereco.create({ data });

      if (!end) {
        vazio();
      }
      return [`Endereço cadastradao com sucesso`, end];
    } catch (error) {
      erroCadastro(error);
    }
  }

  async findAll() {
    try {
      const total = await this.prisma.endereco.findMany({});
      if (total.length == 0) {
        vazio();
      }
      return [`Temos ${total.length} endereços.`, total];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findOne(id: number) {
    try {
      const end = await this.prisma.endereco.findUnique({ where: { id } });
      const medico = await this.prisma.medico.findMany({
        where: { CEP: end.id },
      });
      if (!end) {
        vazio();
      }
      return [end, medico];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findCep(cep: number) {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    console.log(url);

    try {
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(id: number, _updateEnderecoDto: UpdateEnderecoDto) {
    try {
      const end = await this.prisma.endereco.update({
        data: { ..._updateEnderecoDto },
        where: { id },
      });
      if (!end) {
        vazio();
      }
      return end;
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }
}
