/*
  Warnings:

  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Medico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_CEP_fkey";

-- AlterTable
ALTER TABLE "Medico" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "logradouro" TEXT NOT NULL,
ADD COLUMN     "numero" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Endereco";
