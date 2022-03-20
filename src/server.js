// mengimpor dotenv dan menjalankan konfigurasinya

const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongsService = require('./services/inMemory/SongsService');
const SongsValidator = require('./validator/songs');

const init = async () => {
  const songsService = new SongsService();
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // perhatikan kita punya 2 api artinya ada 2 service yakni AlbumsService dan SongsService
  // lalu bagaimana caranya mendaftarkan 2 plugin kita di server?
  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
