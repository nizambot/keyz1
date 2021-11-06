FROM node:16.6.1-buster

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  wget \
  mc \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@8.1.3
RUN npm install
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY wenkiew197dvcw4
ENV PM2_SECRET_KEY ucswzguxfxhig3c


COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "index.js"]`
