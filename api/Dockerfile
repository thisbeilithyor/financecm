FROM node:22-alpine

WORKDIR /

COPY package*.json .
RUN npm install

COPY . .

ENV APP_NAME="fcm_api"

EXPOSE 5000

CMD ["node", "server.js"]