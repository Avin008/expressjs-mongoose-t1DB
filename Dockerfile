FROM node:18-slim

WORKDIR /app/

COPY package*.json .

RUN yarn install

COPY . .

RUN yarn install

RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3001