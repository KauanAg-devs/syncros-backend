<p align="center">
  <a href="https://github.com/Cauezins/syncros" target="blank">⚡</a>
</p>


  <p align="center">Um aplicativo backend em <a href="http://nodejs.org" target="_blank">Node.js</a> para o projeto Syncros</p>
    <p align="center">

## Descrição

Um repositório que há um aplicativo feito em [Nest](https://github.com/nestjs/nest).

## Instalação

```bash
$ npm install
```
## Rodar o banco de dados

```bash 
#criar um arquivo ".env"
$ touch .env

# colar os dados do .env.example no .env - para rodar corretamente
$ cp .env.example .env

#rodar o banco no Docker
$ docker-compose up -d
```

## Rodar o aplicativo

```bash
# desenvolvimento
$ npm run start

# modo "watch"
$ npm run start:dev

# modo "produção"
$ npm run start:prod
```

## testes

```bash
# unitários
$ npm run test

# e2e
$ npm run test:e2e

# teste de cobertura
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
