const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const db = require('../db/index.js');
const { resolvers } = require('./resolvers.js');
const { typeDefs } = require('./typeDefs.js');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(cors());
// app.use(compression());

var filePath = path.join(
  __dirname,
  'loaderio-a59b0f43e46db3a8a83b68daff4b4d1a.txt'
);

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'Hello Universe this server is running a GraphQL endpoint so head over to /graphql'
    );
});

app.get('/loaderio-a59b0f43e46db3a8a83b68daff4b4d1a/', (req, res) => {
  res.status(200).sendFile(filePath);
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
