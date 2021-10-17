FROM node:14.16.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["react-scripts", "start"]
