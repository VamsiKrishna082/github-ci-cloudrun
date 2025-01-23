# Use Node.js official image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the port Cloud Run will listen on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
