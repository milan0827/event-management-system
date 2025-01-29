FROM node:23-alpine3.20 AS base

FROM base AS deps
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run generate

RUN npm run dev

FROM base AS prod

WORKDIR /app

COPY --from=deps /app/.next ./app/.next
COPY --from=deps /app/package*.json ./app/package*.json
COPY --from=deps /app/public ./app/public
RUN npm ci 

CMD ["npm","start"]

