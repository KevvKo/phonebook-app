FROM node:14.16.0
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
