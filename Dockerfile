# Dockerfile - DailyPulse Online Hosting
FROM node:20-alpine

WORKDIR /app

# Salin fail package dan kod aplikasi
COPY package*.json ./
COPY . .

# Pastikan folder data wujud untuk storan pangkalan data kekal
RUN mkdir -p /app/data

# Port aplikasi (lalai: 3000 atau ditetapkan oleh pembekal awan)
ENV PORT=3000
EXPOSE 3000

# Arahan menjalankan pelayan REST API & pangkalan data
CMD ["node", "server.js"]
