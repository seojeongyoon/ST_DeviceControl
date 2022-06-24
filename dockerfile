FROM node:16-alpine
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm install @smartthings/core-sdk
COPY . /app
CMD [ "npm", "start" ]
EXPOSE 4000

