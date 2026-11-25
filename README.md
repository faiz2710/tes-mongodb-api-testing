# Tes MongoDB — API Testing (BUKAN API PRODUCTION)

> ⚠️ **Catatan penting:** repo ini isinya **API testing / latihan doang**, dibuat buat belajar CRUD Node.js + Express + MongoDB (Mongoose). **Bukan API asli/final.**
> API yang sebenarnya bakal di-push di repo terpisah nanti.

## Fitur

CRUD produk sederhana:

| Method | Endpoint | Keterangan |
| --- | --- | --- |
| GET | `/` | Health check |
| GET | `/api/products` | Ambil semua produk |
| GET | `/api/products/:id` | Ambil produk by ID |
| POST | `/api/products` | Tambah produk |
| PUT | `/api/products/:id` | Update produk |
| DELETE | `/api/products/:id` | Hapus produk |

## Struktur

```
index.js                  # entry point, koneksi DB + server
controller/               # logic CRUD
models/                   # schema Mongoose
routes/                   # definisi endpoint
```

## Cara jalanin

1. Install dependency:
   ```bash
   npm install
   ```
2. Copy `.env.example` jadi `.env`, lalu isi connection string MongoDB kamu.
3. Jalankan:
   ```bash
   npm run dev
   ```
   Server jalan di `http://localhost:3000`.

## Contoh body POST/PUT

```json
{
  "name": "Produk A",
  "price": 10000,
  "quantity": 5,
  "image": "https://example.com/gambar.jpg"
}
```

## Stack

Node.js, Express 5, MongoDB, Mongoose.

## Keamanan

- Kredensial database **tidak** disimpan di repo. Isinya cuma di `.env` lokal (di-ignore git).
- Pakai `.env.example` sebagai template, jangan commit `.env`.
- Ganti password user MongoDB Atlas secara berkala.
