-- CreateTable
CREATE TABLE "Teste" (
    "id" SERIAL NOT NULL,
    "teste" TEXT NOT NULL,

    CONSTRAINT "Teste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teste_id_key" ON "Teste"("id");
