import http from 'http';
import app from './app';
import config from './helpers/configEnv';

const server=http.createServer(app);

const port=config.PORT || 3000;

server.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});