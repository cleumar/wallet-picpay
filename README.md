<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
## Description



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
  2. $ npm run start:migrate:dev (caso se for a primeira vez: executar o comando para criar as tabelas na base de dados, caso ja tenha sido executado pular essa etapa)
  3. $ npm start:dev (start da aplicacao)
  4. $ apos o start da aplicação acessar a url: http://localhost:3003/docs/ (acesso a documentação da api)
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






## License

Nest is [MIT licensed](LICENSE).
