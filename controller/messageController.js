import messageModel from "../model/messageModel.js"

export const listMessage = async (req, res) => {
    try{
        const data = await messageModel.find({})

        res.status(201).json({
            message : "list message",
            data : data
        })

    }catch(error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const createMessage = async (req, res) => {
    try{
        const request = req.body

        const response = await messageModel.create({
            message : request.message
        })

        res.status(201).json({
            message : "message berhasil di buat",
            data : response
        })

    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const updateMessage = async (req, res) => {
    try{
        const id = req.params?.id
        const request = req.body
        if (!id) {
            return res.status(500).json({
                message: "id tidak ditemukan",
                data: null
            })
        }

        const response = await messageModel.findByIdAndUpdate(id, {
            message : request.message
        })

        if (response) {
            return res.status(201).json({
            message : "message berhasil diupdate",
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

        const response = await messageModel.findByIdAndDelete(id)

        if (response) {
            return res.status(201).json({
            message : "message berhasil dihapus",
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

