import { Controller, Get, Param } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Endereco')
@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get(':cep')
  findCep(@Param('cep') cep: string) {
    return this.enderecoService.findCep(+cep);
  }
}
