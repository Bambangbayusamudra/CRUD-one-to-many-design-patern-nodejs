var response = require('../response')
var GuruService = require('../Services/GuruService')

async function create(req, res){
    try {
        const reqData = await GuruService.create(req)
        if(typeof reqData == undefined){
            return response(res, 400, false, "Data Not Found")
        }else{
            return response(res, 200, true, "Data Succes to Service", reqData)
        }
    } catch (error) {
        console.log(error)
        return response(res, 402, false, "Data Failed To Service", error)
    }
}
async function tampil(req,res){
    try {
        const reqFind = await GuruService.tampil(req)
        if(typeof reqFind == undefined){
            return response(res, 400, false, "Data Not Found")
        } else{
            return response(res, 200, true, "Data Succes To Service", reqFind)
        }
    } catch (error) {
        return response(res, 402, false, "Data failed To Service", error)
    }
}

module.exports.tampil = tampil
module.exports.create = create