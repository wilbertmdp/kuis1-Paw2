import express from "express"
import mahasiswaModel from "../model/mahasiswaSchema.js"

export const createMahasiswa = async (req, res) => {
    try{
        const request = req.body

        const response = await mahasiswaModel.create({
            nama : request.nama,
            npm : request.npm,
            jurusan : request.jurusan
        })

        res.status(201).json({
            message : "data mahasiswa berhasil di buat",
            data : response
        })

    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const listMahasiswa = async (req, res) => {
    try{
        const data = await mahasiswaModel.find({})

        res.status(201).json({
            message : "list mahasiswa",
            data : data
        })

    }catch(error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const listMahasiswaId = async (req, res) => {
    try{
        const id = req.params.id
        const request = req.body
        if (!id) {
            return res.status(500).json({
                message: "id tidak ditemukan",
                data: null
            })
        }
        const data = await mahasiswaModel.findById(id)

        res.status(201).json({
            message : "list mahasiswa",
            data : data
        })

    }catch(error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const searchMahasiswaByNama = async (req, res) => {
    try {
        const nama = req.params.nama
        if (!nama) {
            return res.status(400).json({
                message: "Nama tidak boleh kosong",
                data: null
            })
        }

        const data = await mahasiswaModel.find({
            nama: { $regex: nama, $options: "i" }
        })

        if (data.length === 0) {
            return res.status(404).json({
                message: `Mahasiswa dengan nama '${nama}' tidak ditemukan`,
                data: []
            })
        }

        res.status(200).json({
            message: "Hasil pencarian mahasiswa",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}


export const updateMahasiswa = async (req, res) => {
    try{
        const id = req.params?.id
        const request = req.body
        if (!id) {
            return res.status(500).json({
                message: "id tidak ditemukan",
                data: null
            })
        }

        const response = await mahasiswaModel.findByIdAndUpdate(id, {
            nama : request.nama,
            npm : request.npm,
            jurusan : request.jurusan
        })

        if (response) {
            return res.status(201).json({
            message : "data mahasiswa berhasil diupdate",
            data : null
            })
        }
    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const deleteMessage = async (req, res) => {
    try{
        const id = req.params.id
        if (!id) {
            return res.status(500).json({
                message: "id tidak ditemukan",
                data: null
            })
        }

        const response = await mahasiswaModel.findByIdAndDelete(id)

        if (response) {
            return res.status(201).json({
            message : "data mahasiswa berhasil dihapus",
            data : null
            })
        }

    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}