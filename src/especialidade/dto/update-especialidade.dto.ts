import { PartialType } from '@nestjs/swagger';
import { CreateEspecialidadeDto } from './create-especialidade.dto';

export class UpdateEspecialidadeDto extends PartialType(CreateEspecialidadeDto) {}
