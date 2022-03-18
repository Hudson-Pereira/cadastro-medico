import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsNotEmpty()
  @IsInt()
  cep: number;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsInt()
  numero: number;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
