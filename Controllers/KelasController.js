var KelasService = require('../Services/KelasService')
var response = require('../response')
const { request } = require('../app')

async function create(req, res){
    try {
        const request = await KelasService.create(req)
        if(typeof request == undefined){
            return response(res, 400, false, "Data Not Found")
        }else{
            return response(res, 200, true, "Data Succes To Service", request)
        }
        
    } catch (error) {
        return response(res, 400, false, "Data Failed To Service", error)
    }
}

async function tampil(req, res){
    try {
        const requestTampil = await KelasService.tampil(req)
        if(typeof requestTampil == undefined){
            return response(res, 400, false, "Data is Not Found")
        }else{
            return response(res, 200, true, "Data Succes To Service", requestTampil)
        }
    } catch (error) {
        return response(res, 402, false, "Data Failed To Service", error )
    }
}

module.exports.tampil = tampil
module.exports.create = create