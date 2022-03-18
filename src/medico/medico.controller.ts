import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MedicoService } from './medico.service';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medico')
@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicoService.create(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicoService.findOne(+id);
  }

  @Get('/nome/:nome')
  findName(@Param('nome') nome: string) {
    return this.medicoService.findName(nome);
  }

  @Get('/crm/:crm')
  findCRM(@Param('crm') crm: string) {
    return this.medicoService.findCRM(+crm);
  }

  @Get('/tel/:telefone')
  findTel(@Param('telefone') telefone: string) {
    return this.medicoService.findTel(+telefone);
  }

  @Get('/cel/:celular')
  findCel(@Param('celular') celular: string) {
    return this.medicoService.findCel(+celular);
  }

  // @Get('/cep/:cep')
  // findCEP(@Param('cep') cep: string) {
  //   return this.medicoService.findCEP(+cep);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicoDto: UpdateMedicoDto) {
    return this.medicoService.update(+id, updateMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicoService.remove(+id);
  }
}
