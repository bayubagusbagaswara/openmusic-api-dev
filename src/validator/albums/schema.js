// schema.js akan digunakan untuk fokus membuat dan menuliskan objek schema data notes
const Joi = require('joi');

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = { AlbumPayloadSchema };
