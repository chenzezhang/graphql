import * as Koa from 'koa';
const app = new Koa;
import * as cors from 'koa-cors';
import * as koaBody from 'koa-body';
import * as apolloKoa from 'apollo-server-koa';
const {ApolloServer, gql} = apolloKoa;

import {typeDef, resolver} from './model';

app.use(cors());

app.use(koaBody());

const typeDefs = gql `
    ${typeDef}
  `;

const resolvers = {
    ...resolver
};

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app, path: '/graphql'});

export {app};