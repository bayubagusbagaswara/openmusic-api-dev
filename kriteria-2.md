# Pengelolaan Data Song

# Create Song
- Method : `POST`
- Endpoint : `/songs`
- Request Body :
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

# Get All Songs
- Method : `GET`
- Endpoint : `/songs`
- Body :
```json
{
    "status": "success",
    "data": "songs"
}
```

# Get Song By Id
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

# Update Song 
- Method : `PUT`
- Endpoint : `/songs/{id}`
- Request Body :
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

# Delete Song
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

# Struktur Response Body

## Get All Songs
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
## Get Song By ID
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

## Object Song yang disimpan

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

