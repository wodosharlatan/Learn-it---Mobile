# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /backend
WORKDIR /backend

# Copy the current directory contents into the container at /backend
COPY . /backend

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
