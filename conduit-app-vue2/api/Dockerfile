# Docker base image
FROM node:16

# set the working directory
WORKDIR /api

# install and cache app dependencies
COPY package.json .

RUN npm install
COPY . .
CMD npm start