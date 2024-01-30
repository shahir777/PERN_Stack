FROM node:20-alpine

WORKDIR /app

# Copy only the package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev", "--debug"]