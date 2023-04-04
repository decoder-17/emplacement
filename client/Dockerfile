FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


### PRODUCTION

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

