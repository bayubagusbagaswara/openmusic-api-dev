# Penganganan Error (Error Handling)

## Response jika validasi data pada request payload tidak sesuai (gagal)
- Status Code : `400` (Bad Request)
- Body :
```json
{
    "status": "fail",
    "message": "any"
}
```
## Response jika resource tidak ditemukan
- Status Code : `404` (Not Found)
- Body :
```json
{
    "status": "fail",
    "message": "any"
}
```

## Response jika terjadi server error
- Status Code : `500` (Internal Server Error)
- Body : 
```json
{
    "status": "error",
    "message": "any"
}
```