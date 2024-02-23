const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');

// Read the schemas from file
const readSchema = (filename) => {
  const filePath = path.join(__dirname, 'src', 'graphql', filename);
  return fs.readFileSync(filePath, 'utf-8');
};

const typeDefs = [
  readSchema('userSchema.graphql'),
  readSchema('profileSchema.graphql'),
  readSchema('messagingSchema.graphql'),
];

// Resolvers
const userResolvers = require('./src/resolvers/userResolver');
const profileResolvers = require('./src/resolvers/profileResolver');
const messagingResolvers = require('./src/resolvers/messagingResolver');

// Create ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers: [userResolvers, profileResolvers, messagingResolvers],
});

// Create an Express app
const app = express();

// Start ApolloServer asynchronously
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Call the asynchronous function to start the server
startServer().then(() => {
  // Define a route
  app.get('/', (req, res) => {
    res.send('Hello from the server!');
  });

  // Start the server
  const port = 3001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});