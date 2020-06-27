# Building app
FROM node:12-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build

# Starting NGINX
FROM nginx:1.18.0-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html
