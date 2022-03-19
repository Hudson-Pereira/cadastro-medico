import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import fetch from 'node-fetch';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async findCep(cep: number) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(
        'Nenhum endereço encontrado, verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
