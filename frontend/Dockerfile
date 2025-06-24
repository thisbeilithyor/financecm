FROM node:22-alpine AS build

WORKDIR /

COPY package*.json .
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

#Stage 2: dev env

#Stage 3: prod env
FROM nginx:alpine AS production

COPY conf /etc/nginx
COPY --from=build /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]