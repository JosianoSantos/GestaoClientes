FROM node:12.16.2-alpine AS build

RUN mkdir /app

WORKDIR /app


COPY package.json package-lock.json ./

RUN npm install -g @angular/cli

RUN npm install --silent

COPY . .

RUN ng build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/src/app/dist/* /usr/share/nginx/html
