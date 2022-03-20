/* eslint-disable camelcase */
const mapSongDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

const mapAlbumDBToModel = ({ id, name, year }) => ({
  id,
  name,
  year,
});

module.exports = { mapAlbumDBToModel, mapSongDBToModel };
