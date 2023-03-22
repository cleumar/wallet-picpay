-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "id_transaction" TEXT NOT NULL,
    "from" VARCHAR(100) NOT NULL,
    "to" VARCHAR(20) NOT NULL,
    "desc_transaction" VARCHAR(100) NOT NULL,
    "tp_transaction" VARCHAR(2) NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cod_cli" INTEGER,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_id_transaction_key" ON "transactions"("id_transaction");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_cod_cli_fkey" FOREIGN KEY ("cod_cli") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
