// mengimpor dotenv dan menjalankan konfigurasinya
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const albums = require('./api/albums');
const SongsService = require('./services/inMemory/SongsService');
const AlbumsService = require('./services/inMemory/AlbumsService');
const SongsValidator = require('./validator/songs');
const AlbumsValidator = require('./validator/albums');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // perhatikan kita punya 2 api artinya ada 2 service yakni AlbumsService dan SongsService
  // lalu bagaimana caranya mendaftarkan 2 plugin kita di server?
  await server.register([
    {
      plugin: albums,
      options: {
        service: albumsService,
        validator: AlbumsValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songsService,
        validator: SongsValidator,
      },
    }]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
