# base image
FROM node:lts-alpine

# set the working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "run", "serve"]
