FROM node:22-alpine

WORKDIR /

COPY package*.json .
RUN npm install -y

COPY . .
RUN npm run build

ENV APP_NAME="fcm_api"

EXPOSE 5000

CMD ["npm", "run", "start"]