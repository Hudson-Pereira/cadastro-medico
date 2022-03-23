import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateEspecialistaDto {
  @ApiProperty({
    example: 'medico: 1',
    description: `Essa classe é utilizada para cadastrar novos especialistas.
    Deve-se cadastrar primeiro um médico, para depois cadastrar o especialista.
    Foi feita relação many-to-many entre as tabelas de medico e especialidade no banco de dados, afim de se cadastrar quantas especialidades forem necessárias para o médico.
    Para fazer o cadastro, será incluído o ID do médico no campo 'medico'.`,
  })
  @IsNotEmpty()
  @IsInt()
  medico: number;

  @ApiProperty({
    example: 'especialidade: 1',
    description: `Essa classe é utilizada para cadastrar novos especialistas.
    Deve-se cadastrar primeiro um médico, para depois cadastrar o especialista.
    Foi feita relação many-to-many entre as tabelas de medico e especialidade no banco de dados, afim de se cadastrar quantas especialidades forem necessárias para o médico.
    Para fazer o cadastro, será incluído o ID da especialidade no campo 'especialidade'.`,
  })
  @IsNotEmpty()
  @IsInt()
  especialidade: number;
}
