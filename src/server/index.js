const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const { resolvers } = require('./resolvers.js');
const { typeDefs } = require('./typeDefs.js');
const PORT = process.env.PORT;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(cors());
app.use(compression());

var filePath = path.join(__dirname, 'loaderio.txt');

app.get('/', (req, res) => {
  res.status(200).send('Questions & Asnwers API');
});

app.get('/loaderio/', (req, res) => {
  res.status(200).sendFile(filePath);
});

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
