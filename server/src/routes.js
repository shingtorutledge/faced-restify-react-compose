import restify from 'restify';
import initImageRoutes from './image/image.route';

const initRoutes = (server, db) => {
  // Deploy middleware
  server.use(restify.plugins.bodyParser({
    mapParams: true,
    mapFiles: true,
  }));
  server.use(restify.plugins.queryParser());

  initImageRoutes(server, db);
};

export default initRoutes;
