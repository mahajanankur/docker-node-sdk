# alpine base image
FROM node:10.20.1-alpine
# RUN apk add g++ make python
RUN apk add --no-cache python make g++
WORKDIR /home/app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
