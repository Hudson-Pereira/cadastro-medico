import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEspecialidadeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}
