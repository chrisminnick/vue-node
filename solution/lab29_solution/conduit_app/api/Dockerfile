# Docker base image
FROM node:16

# set wroking directory
WORKDIR /api

# install and cache app dependencies
COPY package.json .

RUN npm install
COPY . .
CMD npm start