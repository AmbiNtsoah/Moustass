FROM node:18

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

CMD [ "npm", "run", "dev" ]