FROM node:16.16.0 as build-stage
WORKDIR /var/jenkins_home/workspace/nopo/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/jenkins_home/workspace/nopo/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
