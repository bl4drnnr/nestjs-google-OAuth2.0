FROM node

WORKDIR /usr/src/app

RUN npm i -g nest

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build
