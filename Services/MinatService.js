// var MinatModel = require('../Models/Minat');
// var MapelModel = require('../Models/Mapel');
// var SiswaModel = require('../Models/Siswa');;

const MinatModel = require('../Models/Minat');
const SiswaModel = require('../Models/Siswa');
const MapelModel = require('../Models/Mapel')

async function create(req, res, id){

    try {
        const reqbody = req.body;
        // console.log(reqbody)
        
        const MinatRepository = require('../Repositories/MinatRepository');
        let request = await MinatRepository.insert({
            mapelid : reqbody.mapelid,
            siswaid : reqbody.siswaid
        });
        let reqData = request
        if (typeof reqData == null){
            return (res, 400, false ,'Data not found');
        }else{
            // let fecthAll = MinatRepository.findEndpoint(reqbody.siswaid, reqbody.mapelid);
            console.log(fecthAll)
            return (res, 200, true ,'Success Send reqData To Service', reqData);
        }
        // SiswaModel.belongsToMany(MinatModel, {foreignKey: 'id',sourceKey:'siswaid'});//correct and working
        // SiswaModel.hasMany(MinatModel, {foreignKey: 'siswaid',sourceKey:'id'});//correct and working
        // MapelModel.hasMany(MinatModel, {foreignKey: 'mapelid',sourceKey:'id'});//correct and working
        // return MinatRepository.fetchIncluded(id,[MinatModel], request);
        // return (res, 200, true, "Data berhasil di tambahkan",request)

    } catch (error) {
        // console.log("error");
        console.log(error);
        return (res, 400, "Data invalid",error);
    }
}

async function tampil(req){
    // const reqbody = req.body
    // console.log(reqbody)
    try {
        const MinatRepository = require('../Repositories/MinatRepository');
        const id = req.params



        console.log(id)
        let find = await MinatRepository.findEndpoint(id)
        // let response = await MinatRepository.findAll();
        // console.log('response')
        return find;
    } catch (error) {
        return error;
    }
}

module.exports.tampil = tampil
module.exports.create = create