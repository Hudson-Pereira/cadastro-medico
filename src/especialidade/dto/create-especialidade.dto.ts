import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEspecialidadeDto {
  @ApiProperty({
    example: 'Clínico Geral',
    description: `Esta classe é utilizada para cadastrar especialidaes novas. 
    Deve ser um string. Não será permitido salvar mais de uma especialidade com o mesmo nome.`,
  })
  @IsNotEmpty()
  @IsString()
  nome: string;
}
