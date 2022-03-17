import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateEspecialistaDto {
  @IsNotEmpty()
  @IsInt()
  medico: number;

  @IsNotEmpty()
  @IsInt()
  especialidade: number;
}
