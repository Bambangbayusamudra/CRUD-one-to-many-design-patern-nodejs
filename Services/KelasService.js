const { request } = require("express")

async function create (req){
    try {
        const reqBody = req.body

        let payload = {
            siswaid : reqBody.siswaid,
            jenis_kelas : reqBody.jenis_kelas
        }
        var KelasRepository = require('../Repositories/KelasRepository')
        const request = await KelasRepository.insert(payload)

        return request
    } catch (error) {
        return error
    }
}

async function tampil(req){
    try {
        var KelasRepository = require('../Repositories/KelasRepository')
        const id = req.params

        let find = await KelasRepository.findEndpoint(id); 

        return find
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports.create = create
module.exports.tampil = tampil