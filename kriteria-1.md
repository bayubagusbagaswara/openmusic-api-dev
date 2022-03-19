# Pengelolaan Data Album

# Create Album
- Method : `POST`
- Endpoint : `/albums`
- Request Body :

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

# Get Album By ID
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

# Update Album
- Method : `PUT`
- Endpoint : `/albums/{id}`
- Request Body :
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

# Delete Album
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

# Struktur Response Body

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