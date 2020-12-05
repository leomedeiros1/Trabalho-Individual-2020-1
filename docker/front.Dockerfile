FROM node:15

WORKDIR /code

COPY ./front_test.sh /test.sh

RUN chmod +x /test.sh