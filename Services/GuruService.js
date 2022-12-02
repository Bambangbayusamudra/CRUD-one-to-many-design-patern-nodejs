const { response } = require('../app')

async function create(req){
    console.log("request")
    console.log(req)
    try {
        const reqBody = req.body

        let payload = {
            mapelid : reqBody.mapelid,
            nama : reqBody.nama
        }
        var GuruRepository = require('../Repositories/GuruRepository')
        const request = await GuruRepository.insert(payload)

        return request;

    } catch (error) {
        console.log(error)
        return error
    }
}

async function tampil(req){
    // console.log(req)
    try {
        // const mapelid = req.body.mapelid
        const nama = req.body.nama
        var GuruRepository = require('../Repositories/GuruRepository')
        const request = await GuruRepository.findEndpoint(nama)
        // .then((response) => {
        //     console.log("response")
        //     console.log(response)
        // })
            
        return request
    } catch (error) {
        console.log(error)
        return error
    }
}

module.exports.tampil =tampil
module.exports.create =create