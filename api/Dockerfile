FROM node

WORKDIR /home/app/api

ENV PATH /home/app/api/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .