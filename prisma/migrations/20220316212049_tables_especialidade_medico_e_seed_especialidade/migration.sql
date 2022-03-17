-- CreateTable
CREATE TABLE "Especialidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Especialidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialista" (
    "id" SERIAL NOT NULL,
    "medico" INTEGER NOT NULL,
    "especialidade" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "CRM" INTEGER NOT NULL,
    "telefone" INTEGER NOT NULL,
    "celular" INTEGER NOT NULL,
    "CEP" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Especialidade_id_key" ON "Especialidade"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Especialidade_nome_key" ON "Especialidade"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Especialista_id_key" ON "Especialista"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_id_key" ON "Medico"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_nome_key" ON "Medico"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_CRM_key" ON "Medico"("CRM");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_telefone_key" ON "Medico"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_celular_key" ON "Medico"("celular");

-- AddForeignKey
ALTER TABLE "Especialista" ADD CONSTRAINT "Especialista_especialidade_fkey" FOREIGN KEY ("especialidade") REFERENCES "Especialidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Especialista" ADD CONSTRAINT "Especialista_medico_fkey" FOREIGN KEY ("medico") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
