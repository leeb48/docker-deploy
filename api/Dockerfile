FROM node:alpine as builder
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install 
COPY . .
# CMD ["npm","run","start:dev"]
RUN npm run build

FROM node:alpine as poduction
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/main"]