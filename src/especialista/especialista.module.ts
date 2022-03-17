import { Module } from '@nestjs/common';
import { EspecialistaService } from './especialista.service';
import { EspecialistaController } from './especialista.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EspecialistaController],
  providers: [EspecialistaService],
})
export class EspecialistaModule {}
