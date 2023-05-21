FROM node:16

ENV NODE_ENV=production

WORKDIR /src/index.js

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "nodemon", "index.js" ]