FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# Generate Prisma Client (DATABASE_URL required by newer Prisma at generate time, value doesn't matter here)
ENV DATABASE_URL="file:/tmp/dev.db"
RUN npx prisma generate

# Build the app
RUN npm run build

EXPOSE 3000

# Script to run migrations and then start the app
CMD sh -c "npx prisma migrate deploy && npm start"
