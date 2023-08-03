FROM node:18

ENV DATABASE_URL='file:/app/database/rickmorty.db'

WORKDIR /app 

COPY package*.json ./ 
 
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

RUN npm run build

CMD [ "npm" , "start" ]