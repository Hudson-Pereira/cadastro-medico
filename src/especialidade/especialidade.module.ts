import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService],
})
export class EspecialidadeModule {}
