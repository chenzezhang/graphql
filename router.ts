
import * as Router from 'koa-router';
// import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
const router = new Router;

import { graphql } from 'graphql';
import {ItemSchema} from './schema';
import { throws } from 'assert';
/**
 * query ItemQuery{ 
        item(id:0){
            id
            title
            price
            pic
        }
       
        }
 */

router.post('/graphql', (ctx: any) => {
    graphql(ItemSchema, ctx.request.body.data)
        .then(result => {
            console.log(result)
            ctx.body = JSON.stringify(result, null, 2);
        })
        .catch(err => {
            throw err;
        })
})
export { router };