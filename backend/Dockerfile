FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app
ENV PORT 8000
EXPOSE $PORT
CMD ["npm","run","start"]