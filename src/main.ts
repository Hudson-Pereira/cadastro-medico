import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Cadastro médico - teste GCB')
    .setDescription(
      `Teste realizado por Hudson Oliveira, Dev Jr em NodeJS, com o intuito de ser contratado como DEV JR na empresa GCB Investimentos.
  Essa API foi programada para cadastrar médicos, contendo as seguintes informações:
  - Nome do médico com um mínimo de 10 e máximo de 120 caracteres, sendo único por médico, portanto, deve-se cadastrar nome e sobrenome.
  - CRM: somente números com no máximo 7 caracteres
  - Telefone fixo: somente números
  - Telefone celular: somente números
  - CEP: somente números (Ao cadastrar o médico, inserindo o CEP, todos os dados de endereço serão preenchidos automáticamente, menos o número, que deve ser inserido ao cadastrar).
  - Especialidade médica (mínimo de duas especialidades). As especialidades solicitadas serão preenchidas por NPX PRISMA DB SEED na tabela ao utlizar o comando NPX PRISMA MIGRATE RESET.
      Foi criada uma relação many-to-many entre as tabelas ESPECIALIDADES e MEDICOS para que possam ser cadastradas mais de uma especialidade por médico.
      Para se fazer o cadastro da especialidade por medico, pelo ThunderClient, Insomnia, Postman, ou outra ferramenta de testes, deve-se primeiro cadastrar o médico, após, pela rota ESPECIALISTA, deverão ser inseridos
      os IDs do medico e da especialidade. Em caso de se fazer conexão com frontEnd compatível, pode-se fazer o cadastro no mesmo formulário, salvando os dois cadastros ao mesmo tempo.
  Essa API deve conter as rotas Insert(CREATE), Update(UPDATE), Select(READ) e Soft Delete(DELETE), esta última foi criada inserindo um campo DELETED no SCHEMA do Medico com padrão FALSE, ao se deletar um médico, essa informação se altera para TRUE, fazendo com que 
    o item excluído apareça na busca geral, não dê conflito com as tabelas relacionadas mas não aparece na busca individual, ou seja, o item ainda está no banco, mas não é acessível para leitura.
  A rota select(READ - GET) terá uma 'subrota' para cada item de cadastro do médico, para que seja feita consulta por cada um deles. Também foi inserida a rota /endereco/(numero cep) para que seja consultado o cep e conferido o endereco antes de inseri-lo no cadastro do médico.
  Foram utilizadas nessa API as seguintes ferramentas:
  - NestJS
  - PRISMA ORM
  - SWAGGER (http://localhost:3000/api)
  - PostgresSQL(Online, link de conexão : "postgres://mvdvqivjjkeyfl:cf986dc1b886932c63a22e4d5f96e940a5c6da68278df961e248da455f3d13f8@ec2-52-203-74-38.compute-1.amazonaws.com:5432/d7vpd98tct6gj6?schema=testegcb")
  - node-fetch para que seja feita requisição do endereço pelo CEP.
  - Ferramenta de validação de entrada de dados CLASS-VALIDATOR 
  - Plataforma de testes durante criação Thunder Client`,
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
