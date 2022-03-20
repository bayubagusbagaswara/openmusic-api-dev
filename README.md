# OpenMusic API V1 Dev

# Library atau Package
- npm init --y
- npm install nodemon --save-dev
- npm install eslint --save-dev
- npx eslint --init
- npm install @hapi/hapi
- npm install nanoid

- buat struktur proyek

- Install joi `npm install joi`
- Install postgres `npm install pg`
- Install dotenv `npm install dotenv`
- `npm install node-pg-migrate`
- kemudian buat scripts di package.json `"migrate": "node-pg-migrate"`
- lalu buat file migrate nya `npm run migrate create "create table songs"` dan `npm run migrate create "create table albums"`
- kemudian tulis skema migrate di kedua file tersebut
- setelah selesai, lalu kita run skema migrate nya `npm run migrate up`

- lalu kita Membuat Postgres NotesService atau pool