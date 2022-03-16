import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const testeSeed = await prisma.teste.upsert({
    where: { id: 1 },
    update: {},
    create: {
      teste: 'teste1',
    },
  });

  const testeSeed2 = await prisma.teste.upsert({
    where: { id: 2 },
    update: {},
    create: {
      teste: 'teste2',
    },
  });

  const Alergologia = await prisma.especialidade.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Alergologia',
    },
  });

  const Angiologia = await prisma.especialidade.upsert({
    where: { id: 2 },
    update: {},
    create: {
      nome: 'Angiologia',
    },
  });

  const BucoMaxilo = await prisma.especialidade.upsert({
    where: { id: 3 },
    update: {},
    create: {
      nome: 'Buco Maxilo',
    },
  });

  const CardiologiaClinica = await prisma.especialidade.upsert({
    where: { id: 4 },
    update: {},
    create: {
      nome: 'Cardiologia Clinica',
    },
  });

  const CardiologiaInfantil = await prisma.especialidade.upsert({
    where: { id: 5 },
    update: {},
    create: {
      nome: 'Cardiologia Infantil',
    },
  });

  const CirurgiaCabPesc = await prisma.especialidade.upsert({
    where: { id: 6 },
    update: {},
    create: {
      nome: 'Cirurgia Cabeça e Pescoço',
    },
  });

  const CirurgiaCardiaca = await prisma.especialidade.upsert({
    where: { id: 7 },
    update: {},
    create: {
      nome: 'Cirugia Cardíaca',
    },
  });

  const CirurgiaTorax = await prisma.especialidade.upsert({
    where: { id: 8 },
    update: {},
    create: {
      nome: 'Cirurgia de Tórax',
    },
  });

  console.log(
    { testeSeed },
    { testeSeed2 },
    { Alergologia },
    { Angiologia },
    { BucoMaxilo },
    { CardiologiaClinica },
    { CardiologiaInfantil },
    { CirurgiaCabPesc },
    { CirurgiaCardiaca },
    { CirurgiaTorax },
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
