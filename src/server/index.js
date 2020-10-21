const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const db = require('../db/index.js');
const { resolvers } = require('./resolvers.js');
const { typeDefs } = require('./typeDefs.js');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello Universe');
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
