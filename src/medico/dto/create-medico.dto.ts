import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  nome: string;

  @IsInt()
  @IsNotEmpty()
  @MaxLength(7)
  CRM: number;

  @IsInt()
  @IsNotEmpty()
  telefone: number;

  @IsInt()
  @IsNotEmpty()
  celular: number;

  @IsInt()
  @IsNotEmpty()
  CEP: number;
}
