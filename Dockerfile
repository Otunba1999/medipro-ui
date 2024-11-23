FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/medipro-app-ui/browser /usr/share/nginx/html
EXPOSE 80
