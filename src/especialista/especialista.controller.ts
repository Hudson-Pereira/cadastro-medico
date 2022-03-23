import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecialistaService } from './especialista.service';
import { CreateEspecialistaDto } from './dto/create-especialista.dto';
import { UpdateEspecialistaDto } from './dto/update-especialista.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Especialistas')
@Controller('especialista')
export class EspecialistaController {
  constructor(private readonly especialistaService: EspecialistaService) {}

  @Post()
  create(@Body() createEspecialistaDto: CreateEspecialistaDto) {
    return this.especialistaService.create(createEspecialistaDto);
  }

  @Get()
  findAll() {
    return this.especialistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialistaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecialistaDto: UpdateEspecialistaDto) {
    return this.especialistaService.update(+id, updateEspecialistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialistaService.remove(+id);
  }
}
