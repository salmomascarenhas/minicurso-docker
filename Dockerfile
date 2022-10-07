FROM node:16

USER node

WORKDIR /app

COPY . /app

CMD [ "/app/start.sh" ]
