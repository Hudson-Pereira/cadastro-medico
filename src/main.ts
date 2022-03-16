import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Cadastro médico - teste GCB')
    .setDescription(
      `Teste realizado por Hudson, Dev Jr em NodeJS, com o intuito de ser contratado como DEV JR na empresa GCB Investimentos.
  Essa API foi programada para cadastrar médicos, tendo as seguintes informações:
  - Nome do médico com no máximo 120 caractéres
  - CRM: somente números com no máximo 7 caracteres
  - Telefone fixo: somente números
  - Telefone celular: somente números
  - CEP: somente números (Ao cadastrar o CEP, deve ser feita uma reqisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
  - Especialidade médica (mínimo de duas especialidades)
  Essa API deve conter as rotas Insert, Update, Select e Soft Delete.
  A rota select(READ) terá uma 'subrota' para cada item de cadastro do médico.
  Foram utilizadas nessa API as seguintes ferramentas:
  - NestJS
  - PRISMA ORM
  - SWAGGER
  - PostgresSQL(Online, link de conexão especificado em .env.bkp)
  - XHR para API dos correios
  - Ferramenta de validação YUP
  - Plataforma de testes Thunder Client`,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT, () =>
    console.log(`App rodando em http://localhost:${PORT}.`),
  );
}
bootstrap();
