FROM node:10-alpine

EXPOSE 3000

WORKDIR /usr/src/node-app

COPY package.json package.json

RUN npm install

COPY . .

ENV DEFAULT_SERVER_PORT = 3000
ENV API_HOST https://api-rmmqswqtzr.now.sh/

CMD ["npm", "start"]
