const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const { mapSongDBToModel } = require('../../utils');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async addSong({
    title, year, performer, genre, duration, albumId,
  }) {
    const id = `song-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id',
      values: [id, title, year, performer, genre, duration, albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  // saat memanggil service getSongs() maka kita sertakan parameter title dan performer, atau bisa tidak ada parameter sama sekali
  // harusnya di service fokus bisnis logic
  // dimana function getSong akan menerima parameter berupa Title dan Performer
  // lalu data didatabase akan diquery berdasarkan title atau performer
  async getSongs({ title, performer }) {
    const titleSong = title.toLowerCase().includes(title.toLowerCase());
    const performerSong = performer.toLowerCase().includes(performer.toLowerCase());

    if (title && performer) {
      const query = {
        text: 'SELECT * FROM songs WHERE title = $1 AND performer = $2',
        values: [titleSong, performerSong],
      };
      const result = await this._pool.query(query);
      return result.rows.map(mapSongDBToModel);
    } if (title) {
      const query = {
        text: 'SELECT * FROM songs WHERE title = $1',
        values: [titleSong],
      };
      const result = await this._pool.query(query);
      return result.rows.map(mapSongDBToModel);
    } if (performer) {
      const query = {
        text: 'SELECT * FROM songs WHERE performer = $1',
        values: [performerSong],
      };
      const result = await this._pool.query(query);
      return result.rows.map(mapSongDBToModel);
    }

    const result = await this._pool.query('SELET * FROM songs');
    return result.rows.map(mapSongDBToModel);
  }

  async getSongById(songId) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [songId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }
    return result.rows.map(mapSongDBToModel)[0];
  }

  async editSongById(id, {
    title, year, performer, genre, duration, albumId,
  }) {
    const query = {
      text: 'UPDATE songs SET title = $1, year = $2, performer = $3, genre = $4, duration = $5, albumId = $6 WHERE id = $7 RETURNING id',
      values: [title, year, performer, genre, duration, albumId, id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Gagal memperbarui lagu. Id tidak ditemukan');
    }
  }

  async deleteSongById(songId) {
    const query = {
      text: 'DELETE FROM songs WHERE id = $1 RETURNING id',
      values: [songId],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Lagu gagal dihapus. Id tidak ditemukan');
    }
  }
}

module.exports = SongsService;
