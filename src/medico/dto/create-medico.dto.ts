import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10, {
    message:
      'Nome com quantidade mínima de caracteres não atinginda, por favor, insira ao menos 10 caracteres.',
  })
  @MaxLength(120, {
    message: 'Nome com quantidade de caracteres máximo excedido.',
  })
  nome: string;

  @IsInt()
  @IsNotEmpty()
  @Max(9999999, {
    message: 'CRM com quantidade de caracteres máximo excedido.',
  })
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

  deleted: boolean;
}
