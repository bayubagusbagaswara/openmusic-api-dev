const { nanoid } = require('nanoid');

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  // add album
  addAlbum({ name, year }) {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newAlbum = {
      id,
      name,
      year,
      insertedAt,
      updatedAt,
    };

    this._albums.push(newAlbum);
    const isSuccess = this._albums.filter((album) => album.id === id).length > 0;
    if (!isSuccess) {
      throw new Error('Album gagal ditambahkan');
    }
    return id;
  }

  // get all album
  getAlbums() {
    return this._albums;
  }

  // get album by id
  getAlbumById(id) {
    const album = this._albums.filter((a) => a.id === id)[0];
    if (!album) {
      throw new Error('Album tidak ditemukan');
    }
    return album;
  }

  // update album
  editAlbumById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);

    if (index === -1) {
      throw new Error('Gagal memperbarui album. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
      updatedAt,
    };
  }

  // delete album
  deleteAlbumById(id) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new Error('Album gagal dihapus. Id tidak ditemukan');
    }
    this._albums.splice(index, 1);
  }
}

module.exports = AlbumsService;
