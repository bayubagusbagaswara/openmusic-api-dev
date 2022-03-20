// untuk masalah routing akan disimpan di dalam routes.js
const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler, // postNoteHandler hanya menerima dan menyimpan "satu" album.
  },
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getAlbumsHandler, // getNotesHandler mengembalikan "banyak" album.
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler, // getNoteByIdHandler mengembalikan "satu" album.
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler, // putNoteByIdHandler hanya menerima dan mengubah "satu" album.
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler, // deleteAlbumByHandler hanya menghapus "satu" album.
  },
];

module.exports = routes;
