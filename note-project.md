# Note Project

# Langkah membuat project dan library yang digunakan

- Buat project di github, lalu clone di local komputer

    ```
    git clone <repository_project>
    ```

- Buat project nodejs

    ```
    npm init --y
    ```
- Install Nodemon

    ```
    npm install nodemon --save-dev
    ```

- Install Eslint

    ```
    npm install eslint --save-dev
    ```

- Konfigurasi Eslint

    ```
    npx eslint --init
    ```

- Install Hapi

    ```
    npm install @hapi/hapi
    ```

- Install Nanoid

    ```
    npm install nanoid
    ```

- Install Joi

    ```
    npm install joi
    ```

- Install postgresql

    ```
    npm install pg
    ```

- Install dotenv

    ```
    npm install dotenv
    ```

- Install node-pg-migrate untuk migrasi skema database

    ```
    npm install node-pg-migrate
    ```

- Tambahkan scripts di package.json 

    ```
    "migrate": "node-pg-migrate"
    ```

- Jalankan migrasi skema yang sudah dibuat

    ```
    npm run migrate up
    ```

# Create Table
- Table Albums

    ```
    npm run migrate create "create table albums"
    ```

- Table Songs
    ```
    npm run migrate create "create table songs"
    ```

- Menghapus semua data table

    ```
    TRUNCATE albums, songs;
    ```

# Langkah Membuat User dan Database

- Login postgres di terminal/CMD, ketikan perintah dibawah, lalu masukkan password postgresql nya

    ```
    psql --username postgres
    ```

- Buat User baru beserta password untuk user tersebut

    ```
    CREATE USER `<nama_user>` WITH ENCRYPTED PASSWORD `'<password_user>'`;
    ```

- Buat database

    ```
    CREATE DATABASE `<nama_database>`;
    ```

- Berikan akses User ke database

    ```
    GRANT ALL PRIVILEGES ON DATABASE `<nama_database>` TO `<nama_user>`;
    ```    