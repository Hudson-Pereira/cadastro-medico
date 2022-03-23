import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, MaxLength, MinLength } from 'class-validator';

export class CreateMedicoDto {
  @ApiProperty({
    example: 'Hudson Oliveira',
    description: `Esse campo será utilizado para cadastrar o nome do médico. Deve-se utilizar nome e sobrenome.
    O mínimo de caracteres aceito é 10 e o máximo 120.
    O tipo de dado deve ser string.
    Não pode aceitar nomes duplicados, por esse motivo, optei por colocar nome e sobrenome nesse campo.`,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10, {
    message: 'Nome com quantidade mínima de caracteres não atinginda, por favor, insira ao menos 10 caracteres.',
  })
  @MaxLength(120, {
    message: 'Nome com quantidade de caracteres máximo excedido.',
  })
  nome: string;

  @ApiProperty({
    example: 1234567,
    description: `Esse campo será utilizado para cadastrar o CRM do médico, contendo apenas números.
    O máximo de caracteres aceito é 7.
    Não deve aceitar CRM duplicado.`,
  })
  @IsInt()
  @IsNotEmpty()
  @Max(9999999, {
    message: 'CRM com quantidade de caracteres máximo excedido.',
  })
  CRM: number;

  @ApiProperty({
    example: 38984113383,
    description: `Esse campo será utilizado para cadastrar o telefone do médico, contendo apenas números.
    Não deve aceitar dado duplicado.`,
  })
  @IsInt()
  @IsNotEmpty()
  telefone: number;

  @ApiProperty({
    example: 38984113383,
    description: `Esse campo será utilizado para cadastrar o celular do médico, contendo apenas números.
    Não deve aceitar dado duplicado.`,
  })
  @IsInt()
  @IsNotEmpty()
  celular: number;

  @ApiProperty({
    example: 12248210,
    description: `Esse campo será utilizado para cadastrar todo o endereço do médico, contendo apenas números.
    Ao inserir o CEP, automaticamente serão preenchidos os campos: 
    - logradouro,
    - bairro,
    - cidade,
    - estado.`,
  })
  @IsInt()
  @IsNotEmpty()
  CEP: number;

  logradouro: string;

  @ApiProperty({
    example: 54,
    description: `Esse campo será utilizado para cadastrar o número da residencia do médico, contendo apenas números.
    Esse é o único campo, depois do CEP, a ser preenchido manualmente no cadastro do médico.`,
  })
  @IsInt()
  @IsNotEmpty()
  numero: number;

  bairro: string;

  cidade: string;

  estado: string;

  @ApiProperty({
    example: false,
    description: `Esse campo é o que define se o cadastro do médico está ativo ou não para uso.
    É um campo preenchido automaticamente, por padrão, contém o valor false.
    Ao se utilizar a função DELETE da rota /médico, será feito um UPDATE alterando esse valor para true,
    fazendo com que o item excluído apareça na busca geral, não dê conflito com as tabelas relacionadas 
    mas não aparece na busca individual, ou seja, o item ainda está no banco, mas não é acessível para leitura. `,
  })
  deleted: boolean;
}
