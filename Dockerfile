FROM node:18

WORKDIR /src/index.js

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]