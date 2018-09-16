import * as Koa from 'koa';
const app = new Koa;
import * as cors from 'koa-cors';
import * as koaBody from 'koa-body';
// import { router } from './router';
import * as apolloKoa from 'apollo-server-koa';
const { ApolloServer, gql } = apolloKoa;

app.use(cors());

app
    .use(koaBody());

    const typeDefs = gql`
  type Query {
    hello: String,
    xiaozhang: String,
  },
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    xiaozhang: () => 'dfsdfsdf',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
// app.use(router.routes())
//     .use(router.allowedMethods());
        
export {app};