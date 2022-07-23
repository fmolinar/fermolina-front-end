FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]

# steps to build the image
# docker build -t fermolina-front-end:latest .
# docker run --name fermolina-front-end -d -p 3000:3000 fermolina-front-end:latest