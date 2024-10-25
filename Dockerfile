FROM node:latest AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/build/browser /usr/share/nginx/html