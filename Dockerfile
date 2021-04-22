#Alpine é distribuição do linux clean
FROM node:14.15.4-alpine3.12

RUN apk add bash

#node é um user non-root
USER node

#Diretóriod e trabalho do user node
WORKDIR /home/node/app

#Copiando o fonte para container
COPY . .