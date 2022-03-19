# Menggunakan Database dalam Menyimpan Data Album dan Lagu

- Data lagu harus disimpan di dalam database menggunakan PostgreSQL agar ketika di-restart data tidak akan hilang.
- Wajib menggunakan teknik migrations dalam mengelola struktur tabel pada database.
- Wajib menyimpan nilai host, post, maupun kredensial dalam mengakses database pada environment variable dengan ketentuan:
    - `PGUSER` : menyimpan nilai user untuk mengakses database.
    - `PGPASSWORD` : menyimpan nilai password dari user database.
    - `PGDATABASE` : menyimpan nilai nama database yang digunakan.
    - `PGHOST` : menyimpan nilai host yang digunakan oleh database.
    - `PGPORT` :  menyimpan nilai port yang digunakan oleh database.
- Wajib menggunakan package dotenv serta berkas .env dalam mengelola environment variable.
