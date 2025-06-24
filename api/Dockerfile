FROM node:22-alpine

WORKDIR /

COPY package.json .
RUN npm install

COPY . .

ENV APP_NAME="fcmapi"

EXPOSE 5000

CMD ["node", "server.js"]