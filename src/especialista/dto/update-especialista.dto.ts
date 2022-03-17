import { PartialType } from '@nestjs/swagger';
import { CreateEspecialistaDto } from './create-especialista.dto';

export class UpdateEspecialistaDto extends PartialType(CreateEspecialistaDto) {}
