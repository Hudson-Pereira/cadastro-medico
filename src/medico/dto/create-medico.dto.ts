import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120, { message: 'Tamanho máximo excedido.' })
  nome: string;

  @IsInt()
  @IsNotEmpty()
  @MaxLength(7, { message: 'Tamanho máximo excedido.' })
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

  @IsString()
  @IsNotEmpty()
  especialidade: string;
}
