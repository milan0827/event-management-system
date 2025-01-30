FROM node:23-alpine3.20 AS base

FROM base AS deps
WORKDIR /app

COPY package*.json .
RUN npm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

FROM base AS prod

WORKDIR /app

COPY --from=deps /app/.next .
COPY --from=deps /app/package*.json .
COPY --from=deps /app/public ./.next
RUN npm ci --only=production

CMD ["npm","start"]

