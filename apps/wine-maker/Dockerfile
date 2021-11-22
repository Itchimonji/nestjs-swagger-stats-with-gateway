FROM base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build wine-maker ${BUILD_FLAG}

FROM base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV

EXPOSE 3334

CMD ["node", "./dist/apps/wine-maker/main.js"]
