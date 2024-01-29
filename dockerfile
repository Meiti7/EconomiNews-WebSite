# Use the official Node.js image as a base image
FROM node:20.9.0
# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to run your Next.js app
CMD ["npm", "run", "dev"]
