-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cep" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_id_key" ON "Endereco"("id");

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_CEP_fkey" FOREIGN KEY ("CEP") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
