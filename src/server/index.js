import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import db from '../db/index.js';
import { resolvers } from './resolvers.js';
import { typeDefs } from './typeDefs.js';

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
