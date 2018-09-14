import { app } from './server';

const server = app.listen(3001, () => {
    const host = server.address().address;
    const port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});