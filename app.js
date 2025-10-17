import express from "express"
import api from "./route/api.js" // harus ada .js
import database from "./config/database.js"

const app = express()
app.use(express.json())

app.use(`/api`, api)
app.use(express.static("public"))

app.listen(3000, () => {
    database()
    console.log(`Aplikasi berjalan di http://localhost:3000`);
})