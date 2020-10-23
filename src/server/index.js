const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const db = require('../db/index.js');
const { resolvers } = require('./resolvers.js');
const { typeDefs } = require('./typeDefs.js');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app });

app.use(cors());

// app.use((req, res) => {

// })

app.get('/', (req, res) => {
  res.status(200).send('Hello Universe this server is running a GraphQL endpoint so head over to /graphql');
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
