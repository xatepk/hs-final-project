FROM node:19-alpine
WORKDIR /app
EXPOSE 3001

COPY package.json package.json
RUN npm install
COPY . .
CMD [ "npm", "start" ]
