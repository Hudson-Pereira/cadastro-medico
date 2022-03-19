import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoModule } from './medico/medico.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { EspecialistaModule } from './especialista/especialista.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [
    MedicoModule,
    EspecialidadeModule,
    EspecialistaModule,
    EnderecoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
