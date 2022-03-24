FROM node:alpine

RUN adduser -D noder
USER noder

WORKDIR /home/noder/app

COPY --chown=noder:noder package*.json ./

RUN npm i
# RUN npm ci --only=production

COPY --chown=noder:noder . .

EXPOSE 5000

# Launch node start
CMD ["npm", "start"]