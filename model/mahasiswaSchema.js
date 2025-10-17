import express from "express"
import mongoose from "mongoose"

const mahasiswaSchema = new mongoose.Schema(
    {
        nama : {
            type : String,
            trim : true,
            required : [true, "isi nama lengkap Mahasiswa"]
        },
        npm : {
            type : String,
            trim : true,
            required : [true, "isi nomor pokok mahasiswa"]
        },
        jurusan : {
            type : String,
            trim : true,
            required : [true, "Prodi wajib di isi"]
        },
    },
    {
        timestamps : true
    }
)

const mahasiswaModel = new mongoose.model("mahasiswa", mahasiswaSchema)

export default mahasiswaModel