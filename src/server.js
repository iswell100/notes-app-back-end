const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
		routes: {
			cors: {
				origin: ['*'], // an array of origins or 'ignore'
        headers: ["Accept", "Content-Type"],
        additionalHeaders: ["X-Requested-With"]
		}
		}
  });

	server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();