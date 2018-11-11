FROM node:10-alpine

WORKDIR /usr/src/api

COPY package.json package.json

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

COPY . .

ENV DEFAULT_SEVER_PORT 3000
ENV DB_HOST mongodb://sienna-final:sienna-final1234@ds157493.mlab.com:57493/sienna-final
ENV SHA_SALTS 10
ENV JWT_KEY super secret key

EXPOSE 3000

CMD ["npm", "start"]
