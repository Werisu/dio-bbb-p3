# Importante

##### As alterações abaixos foram desfeitas e o arquivo RestService e Registrar-votação estão de acordo com o arquivo original para utilizar com a API JAVA

acredito que esteja funcionando... na minha máquina funciona kkkk

Eu não tinha na minha máquina:

- MongoDb
- Kafka
- Ambiente de desenvolvimento Java 11+

Então tive que construir um api db.json usando o [json-server](https://www.npmjs.com/package/json-server).

Eu fiz poucas modificações, só mudei a rota do api _frontend\src\app\service\RestService.ts_ para apontar para a api json-server.

E lá no _frontend\src\app\registrar-votacao\registrar-votacao.component.ts_ trocando o "this.voto = voto.nome" para "this.voto = voto.id"