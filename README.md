## Descrição

1. Desenvolver uma solução em Node + NestJS para servir um aplicativo de Carteira Digital (Wallet) com Extrato,  onde seja possível receber eventos de Adição de Valores, Retirada de Valores, Compras, Cancelamento e Estorno.

 
 ## Ferramentas

- [Docker] - Versao v20.10.11
- [Node] -   Versao 16 ou superior
- [docker-compose] - version: '3.7'


 ## Tecnologias

- [Nestjs] -   Framework
- [Prisma] -   ORM
- [Postgres] - Banco de dados
- [Swagger] -  Documentacao da Api
- [Jest] -     Teste unitario


## Pré Requisitos

1. Precisamos primeiramente ter instalado o `docker` e o `docker-compose`.
2. Criar arquivos .env, .env.docker (exemplo da configuracao esta logo abaixo)
3. Instalar Nodejs versão 16 ou superior


### Variáveis de Ambiente

No repositorio esta o arquivo env(não é uma boa pratica subir) conforme abaixo

```
DATABASE_URL=
PORT=

```


## Installation

* # Local
 - baixar o projeto do repositorio no git: https://github.com/cleumar/wallet-picpay.git
 - na pasta raiz, executar os comandos abaixo
 ```bash
  1. $ npm install (instalar as dependencias)
  2. $ startando o postgres: na raiz do projeto executar o comando: docker-compose up postgres
  3. $ npm run start:migrate:dev (caso se for a primeira vez: executar o comando para criar as tabelas na base de dados, caso ja tenha sido executado pular essa etapa)
  4. $ npm start:dev (start da aplicacao)
  5. $ apos o start da aplicação acessar a url: http://localhost:3003/docs/ (acesso a documentação da api)
```



* # Container

1. na raiz do projeto executar o comando: `docker-compose up -d --build`


    ## Comandos importantes

    | Comando                       | Descrição                                                           |
    | ----------------------------- | ------------------------------------------------------------------- |
    | docker-compose up             | Subir container do docker                                           |
    | docker-compose up -d --build  | Subir container do docker em background e builda a imagem           |
    | npm run start:dev             | Rodar o projeto com nodemon                                         | 
    | npm run  build                | Compilar TS > JS                                                    |
    | npm run test                  | Rodar todos os testes                                               |
    | npm run test:ci               | Rodar todos os testes com coverage                                  |


## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:ci
```

## Regras do Body da rota POST:
```
1. na rota > POST /transactions nos campos id_transaction, desc_transaction, tp_transaction, possui algumas validação, conforme abaixo:

-antes de realizar algum movimento na carteira é necessario que o cliente ja esteja cadastrado na base verificar documentacao no swagger
(http://localhost:3003/docs/ (acesso a documentação da api))

-id_transaction: é o identificado da transacao, é um valor unico e obrigatorio, e é de responsabilidade do cliente que ta chamando a api.

-desc_transaction : (desc_transaction somente recebe esses valores, podendo ser maiusculo/minusculo: DEPOSITO, CANCELAMENTO, ESTORNO, COMPRAS, SAQUES ).

-tp_transaction : (tp_transaction possui 2 valores (D/C),  somente pode receber o valor C quando o desc_transaction for (DEPOSITO, CANCELAMENTO, ESTORNO) e D para (COMPRAS, SAQUES ) .

```
## Arquitetura:
  ![Arquitetura](https://user-images.githubusercontent.com/19482159/226821259-627f0cfb-7606-4879-bf2c-ea3db69050b7.png)
