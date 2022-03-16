import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post()
  create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadeService.create(createEspecialidadeDto);
  }

  @Get()
  findAll() {
    return this.especialidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecialidadeDto: UpdateEspecialidadeDto) {
    return this.especialidadeService.update(+id, updateEspecialidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialidadeService.remove(+id);
  }
}
