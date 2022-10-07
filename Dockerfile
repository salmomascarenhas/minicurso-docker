FROM node:16


WORKDIR /app

COPY . /app

RUN npm install

USER node

EXPOSE 3000:3000

RUN npm run start
