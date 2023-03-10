FROM node:14-slim

COPY . .
RUN npm install -g http-server
RUN npm install
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]