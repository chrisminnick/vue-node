# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json .

RUN npm install
RUN npm install @vue/cli -g

COPY . .

EXPOSE 8080
EXPOSE 8081
CMD ["npm", "run", "serve"]