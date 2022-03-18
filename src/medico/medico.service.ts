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
  async create(data: Prisma.MedicoUncheckedCreateInput) {
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
      const end = await this.prisma.endereco.findMany({
        where: { id: doutor.CEP },
      });
      console.log(end);

      if (!doutor || doutor.deleted === true) {
        vazio();
      }
      return [doutor, especialista, end];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findName(nome: string) {
    try {
      const medico = await this.prisma.medico.findMany({
        where: {
          nome: {
            contains: nome,
          },
        },
      });
      if (medico.length == 0) {
        vazio();
      }
      return medico;
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findCRM(CRM: number) {
    try {
      const medico = await this.prisma.medico.findUnique({ where: { CRM } });
      if (!medico || medico.deleted == true) {
        vazio();
      }
      const especialista = await this.prisma.especialista.findMany({
        where: { medico: medico.id },
      });
      const end = await this.prisma.endereco.findMany({
        where: { id: medico.CEP },
      });
      return [medico, especialista, end];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findTel(telefone: number) {
    try {
      const medico = await this.prisma.medico.findUnique({
        where: { telefone },
      });
      const especialista = await this.prisma.especialista.findMany({
        where: { medico: medico.id },
      });
      const end = await this.prisma.endereco.findMany({
        where: { id: medico.CEP },
      });

      if (!medico || medico.deleted === true) {
        vazio();
      }
      return [medico, especialista, end];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }

  async findCel(celular: number) {
    try {
      const medico = await this.prisma.medico.findUnique({
        where: { celular },
      });
      const especialista = await this.prisma.especialista.findMany({
        where: { medico: medico.id },
      });
      const end = await this.prisma.endereco.findMany({
        where: { id: medico.CEP },
      });
      if (!medico) {
        vazio();
      }
      return [medico, especialista, end];
    } catch (error) {
      console.error(error.message);
      vazio();
    }
  }
  // async findCEP(CEP: number) {
  //   try {
  //     const medico = await this.prisma.medico.findMany({
  //       where: {
  //         CEP: {
  //           contains: CEP,
  //         },
  //       },
  //     });
  //     if (!medico) {
  //       vazio();
  //     }
  //     return medico;
  //   } catch (error) {
  //     console.error(error.message);
  //     vazio();
  //   }
  // }

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
    // try {
    //   const medico = await this.prisma.medico.delete({ where: { id } });
    //   if (!medico) {
    //     vazio();
    //   }
    //   return [`Excluído com sucesso`, medico];
    // } catch (error) {
    //   console.error(error.message);
    //   vazio();
    // }
    return await this.prisma.medico.update({
      data: {
        deleted: true,
      },
      where: { id },
    });
  }
}
