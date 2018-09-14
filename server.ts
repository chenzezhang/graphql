import * as Koa from 'koa';
const app = new Koa;
import * as cors from 'koa-cors';
import * as koaBody from 'koa-body';
import { router } from './router';

app.use(cors());

app
    .use(koaBody());

app.use(router.routes())
    .use(router.allowedMethods());
        
export { app };