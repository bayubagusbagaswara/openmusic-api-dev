# Kriteria 1: Memunculkan daftar lagu didalam detail album
- API harus memunculkan daftar lagu di dalam album pada endpoint `GET /albums/{albumId}`. 
- Berikut contoh response yang harus dihasilkan:
```json
{
    "status": "success",
    "data": {
        "album": {
        "id": "album-Mk8AnmCp210PwT6B",
        "name": "Viva la Vida",
        "year": 2008,
        "songs": [
            {
            "id": "song-Qbax5Oy7L8WKf74l",
            "title": "Life in Technicolor",
            "performer": "Coldplay"
            },
            {
            "id": "song-poax5Oy7L8WKllqw",
            "title": "Centimeteries of London",
            "performer": "Coldplay"
            },
            {
            "id": "song-Qalokam7L8WKf74l",
            "title": "Lost!",
            "performer": "Coldplay"
            }
        ]
    }
  }
}
```

# Kriteria 2: Query Parameter untuk Pencarian Lagu

- Menerapkan query parameter pada endpoint `GET /songs` untuk fitur pencarian lagu. 
- `Berikut ketentuan parameternya:

- `?title` : mencari lagu berdasarkan judul lagu.
- `?performer` : mencari lagu berdasarkan performer.

- Catatan: Penggunaan kedua parameter tersebut dapat dikombinasikan.