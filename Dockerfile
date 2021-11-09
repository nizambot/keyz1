FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  ffmpeg \
  wget \
  chromium \ 
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install npm@8.1.3
RUN npm install 
RUN npm instal pm2
RUN npm install ytdl-core@latest
ENV PM2_PUBLIC_KEY r5nhytflswo1ly3
ENV PM2_SECRET_KEY cygkc3bz1dww20f

COPY . .
EXPOSE 5000

CMD ["pm2-runtime", "index"]`
