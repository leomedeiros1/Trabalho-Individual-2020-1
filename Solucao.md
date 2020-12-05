# Trabalho Individual - GCES - 2020/1

[![Build Status](https://travis-ci.com/leomedeiros1/Trabalho-Individual-2020-1.svg?branch=master)](https://travis-ci.com/leomedeiros1/Trabalho-Individual-2020-1) 
[![Maintainability](https://api.codeclimate.com/v1/badges/1ed5bbbbcec4df853b36/maintainability)](https://codeclimate.com/github/leomedeiros1/Trabalho-Individual-2020-1/maintainability)

## Aluno: Leonardo de Araujo Medeiros        17/0038891

### 1. Containerização

Foi realizada a containerização de ambos os subsistemas (Front, Back e DB) em seus devidos containers individuais, comunicando-se por uma rede (project_network) dentro do docker-compose . A configuração da rede de  containers é feita pelo `docker-compose.yml` junto aos arquivos de configurações individuais disponiveis em `docker/`

* Docker version 19.03.8

* docker-compose version 1.27.2

### 2. Integração contínua

* **Travis CI**: Foi realizada a integração contínua por meio da ferramenta Travis, que realiza a checagem da build e executa o testes a cada commit realizado. A configuração desta ferramenta é feita por meio do arquivo `.travis.yml` junto à interface web do próprio [Travis](https://travis-ci.com/).

* **Code Climate**: Foi adicionado ao repositório o indicador de qualidade de código medido pela ferramenta CodeClimate, que também realiza sua checagem a cada commit realizado. A configuração desta ferramenta é feita totalmente pela sua [interface web](https://codeclimate.com/)



## Como Executar

* No diretório base do projeto, execute: `$ docker-compose up`

## Para executar apenas os testes

Primeiramente execute a build da rede `$ docker-compose up --build -d` . 

Então execute os testes do serviço desejado: 

* FrontEnd: `$ docker-compose run --rm  frontend /test.sh `

* BackEnd: `$ docker-compose run --rm  api /test.sh `