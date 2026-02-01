FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the app
RUN npm run build

EXPOSE 3000

# Script to run migrations and then start the app
CMD sh -c "npx prisma migrate deploy && npm start"
