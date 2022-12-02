const MinatModel = require('../Models/Minat');
const SiswaModel = require('../Models/Siswa');
const MapelModel = require('../Models/Mapel')

async function create(req, res, id){

    try {
        const reqbody = req.body;
        
        let payload = {
            mapelid : reqbody.mapelid,
            siswaid : reqbody.siswaid
        }

        const MinatRepository = require('../Repositories/MinatRepository');
        let request = await MinatRepository.insert(payload);
        let reqData = request
        if (typeof reqData == null){
            return (res, 400, false ,'Data not found');
        }else{
            // let fecthAll = MinatRepository.findEndpoint(reqbody.siswaid, reqbody.mapelid);
            return reqData;
        }

    } catch (error) {
        // console.log("error");
        console.log(error);
        return (res, 400, "Data invalid",error);
    }
}

async function tampil(req){
    try {
        const MinatRepository = require('../Repositories/MinatRepository');
        const id = req.params
        // console.log(id)
        let find = await MinatRepository.findEndpoint(id)
        return find;
    } catch (error) {
        console.log(error)
        return error;
    }
}

async function update(req){
    try {
        let reqbody = req.body
        let params = req.params
        
        const MinatRepository = require('../Repositories/MapelRepository')
        const response = await MinatRepository.update(params,reqbody)
        return response;
    } catch (error) {
        
    }
}

module.exports.update = update
module.exports.tampil = tampil
module.exports.create = create