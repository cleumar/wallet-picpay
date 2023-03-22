FROM node:16-alpine


# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

FROM node:16

COPY --from=0 /app/node_modules ./node_modules
COPY --from=0 /app/package*.json ./
COPY --from=0 /app/dist ./dist
COPY --from=0 /app/prisma ./prisma

EXPOSE 3000
# 👇 new migrate and start app script
CMD [  "npm", "run", "start:prod" ]