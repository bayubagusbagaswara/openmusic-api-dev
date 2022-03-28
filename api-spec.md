# API Specification

# Kriteria 1 : Pengelolaan Data Album

## Create Album
- Method : `POST`
- Endpoint : `/albums`

#### Request Body

```json
{
    "name": "string",
    "year": "number"
}
```
#### Response 
- Status Code : `201`
- Body :

```json
{
    "status": "success",
    "data": "album_id"
}
```

## Get Album By ID
- Method : `GET`
- Endpoint : `/albums/{id}`

#### Response
- Status Code : `200`
- Body :

```json
{
    "status": "success",
    "data": "album_id"
}
```

## Update Album
- Method : `PUT`
- Endpoint : `/albums/{id}`
#### Request Body

```json
{
    "name": "string",
    "year": "number"
}
```

#### Response
- Status Code : `200`
- Body :

```json
{
    "status": "success",
    "message" : "any"
}
```

## Delete Album
- Method : `DELETE`
- Endpoint : `/albums/{id}`

#### Response
- Status Code : `200`
- Body :

```json 
{
    "status": "success",
    "message": "any"
}
```

## Struktur Response Body

```json
{
    "status": "success",
    "data": {
        "album": {
            "id": "album-Mk8AnmCp210PwT6B",
            "name": "Viva la Vida",
            "year": 2008
        }
    }
}
```

# Kriteria 2 : Pengelolaan Data Song

## Create Song
- Method : `POST`
- Endpoint : `/songs`
#### Request Body

```json
{
    "title": "string",
    "year": "number",
    "genre": "string",
    "performer": "string",
    "duration": "number?",
    "albumId": "string?"
}
```

#### Response
- Status Code : `201`
- Body :

```json
{
    "status": "success",
    "data": "song_id"
}
```

## Get All Songs
- Method : `GET`
- Endpoint : `/songs`
#### Response
- Status Code : `200`
- Body :

```json
{
    "status": "success",
    "data": "songs[]"
}
```

## Get Song By Id
- Method : `GET`
- Endpoint : `/songs/{id}`

#### Response
- Status Code : `200`
- Body :

```json
{
    "status": "success",
    "data": "song"
}
```

## Update Song 
- Method : `PUT`
- Endpoint : `/songs/{id}`
#### Request Body

```json
{
    "title": "string",
    "year": "number",
    "genre": "string",
    "performer": "string",
    "duration": "number?",
    "albumId": "string?"
}
```
#### Response
- Status Code : `200`,
- Body :

```json
{
    "status": "success",
    "message": "any"
}
```

## Delete Song
- Method : `DELETE`
- Endpoint : `/songs/{id}`

#### Response
- Status Code : `200`
- Body :

```json
{
    "status": "success",
    "message": "any"
}
```

## Struktur Response Body Get All Songs

```json
{
    "status": "success",
    "data": {
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
```
## Strukturk Response Body Get Song By ID
```json
{
    "status": "success",
    "data": {
        "song": {
            "id": "song-Qbax5Oy7L8WKf74l",
            "title": "Life in Technicolor",
            "year": 2008,
            "performer": "Coldplay",
            "genre": "Indie",
            "duration": 120,
            "albumId": "album-Mk8AnmCp210PwT6B"
        }
    }
}
``` 

## Struktur object Song yang disimpan di database

```json
{
    "id": "song-Qbax5Oy7L8WKf74l",
    "title": "Life in Technicolor",
    "year": 2008,
    "performer": "Coldplay",
    "genre": "Indie",
    "duration": 120,
    "albumId": "album-Mk8AnmCp210PwT6B"
}
```

# Kriteria 3 : Menerapkan Data Validation

## POST /albums
- `name` : string, required
- `year` : number, required

## PUT /albums
- `name` : string, required
- `year` : number, required

## POST /songs
- `title` : string, required
- `year` : number, required
- `genre` : string, required
- `performer` : string, required
- `duration` : number,
- `albumId` : string,

## PUT /songs

- `title` : string, required
- `year` : number, required
- `genre` : string, required
- `performer` : string, required
- `duration` : number
- `albumId` : string

# Kriteria 4 : Penganganan Error (Error Handling)

1. Response jika validasi data pada request payload tidak sesuai (gagal)

    - Status Code : `400 (Bad Request)'
    - Body :

    ```json
    {
        "status": "fail",
        "message": "any"
    }
    ```
2. Response jika resource tidak ditemukan

    - Status Code : `404 (Not Found)`
    - Body :

    ```json
    {
        "status": "fail",
        "message": "any"
    }
    ```

3. Response jika terjadi server error

    - Status Code : `500` (Internal Server Error)
    - Body : 

    ```json
    {
        "status": "error",
        "message": "any"
    }
    ```

# Kriteria 5 : Menggunakan Database dalam Menyimpan Data Album dan Lagu

- Data lagu harus disimpan di dalam database menggunakan PostgreSQL agar ketika di-restart data tidak akan hilang.
- Wajib menggunakan teknik migrations dalam mengelola struktur tabel pada database.
- Wajib menyimpan nilai host, post, maupun kredensial dalam mengakses database pada environment variable dengan ketentuan:
    - `PGUSER` : menyimpan nilai user untuk mengakses database.
    - `PGPASSWORD` : menyimpan nilai password dari user database.
    - `PGDATABASE` : menyimpan nilai nama database yang digunakan.
    - `PGHOST` : menyimpan nilai host yang digunakan oleh database.
    - `PGPORT` :  menyimpan nilai port yang digunakan oleh database.
- Wajib menggunakan package dotenv serta berkas .env dalam mengelola environment variable.

# (OPSIONAL) Kriteria 1 : Memunculkan daftar lagu didalam detail album
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

# (OPSIONAL) Kriteria 2 : Query Parameter untuk Pencarian Lagu

- Menerapkan query parameter pada endpoint `GET /songs` untuk fitur pencarian lagu. 
- `Berikut ketentuan parameternya:

- `?title` : mencari lagu berdasarkan judul lagu.
- `?performer` : mencari lagu berdasarkan performer.

- Catatan: Penggunaan kedua parameter tersebut dapat dikombinasikan.