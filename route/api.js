import express from "express"
import * as messageController from "../controller/messageController.js"
import * as mahasiswaController from "../controller/mahasiswaController.js"

const api = express.Router()

api.get("/message", messageController.listMessage)
api.post("/message", messageController.createMessage)
api.put("/message/:id", messageController.updateMessage)
api.delete("/message/:id", messageController.deleteMessage)

api.get("/mahasiswa", mahasiswaController.listMahasiswa)
api.get("/mahasiswa/:id", mahasiswaController.listMahasiswaId)
api.post("/mahasiswa",mahasiswaController.createMahasiswa)
api.put("/mahasiswa/:id", mahasiswaController.updateMahasiswa)
api.delete("/mahasiswa/:id", mahasiswaController.deleteMessage)

export default api
