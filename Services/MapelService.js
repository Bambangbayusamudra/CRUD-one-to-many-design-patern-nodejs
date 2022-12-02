var MapelModel = require('../Models/Mapel');
var MinatModel = require('../Models/Minat');
// const { param } = require('../routes/V1');

async function create(req, res, id){
    try {
        const reqbody = req.body;
        // console.log(reqbody)
        let payload = {
            jenis_mapel : reqbody.jenis_mapel
        };

        const MapelRepository = require('../Repositories/MapelRepository');
        let request = await MapelRepository.insert(payload);
        return (res, 200, true, "Data berhasil di tambahkan", request)

    } catch (error) {
        console.log(error)
        return (res, 400, "Data invalid",error);
    }
}

async function tampil(req, res){
    try {
        const reqbody = req.body;
        console.log(reqbody)

        const MapelModel = require('../Repositories/MapelRepository');
       let response = await MapelModel.findAll();
        return (res, 200, true, "Data berhasil cari" , response)

    } catch (error) {
        console.log(error);
        return (res, 400, "Data invalid",error);
    }
}

async function destroy(req, res){
    try {
        const reqbody = req.body;
        let params = req.params

        const MapelModel = require('../Repositories/MapelRepository');
       let response = await MapelModel.destroy(params, reqbody);
        return (res, 200, true, "Data berhasil cari",response)

    } catch (error) {
        console.log(error);
        return (res, 400, "Data invalid",error);
    }
}

async function update(req, res){
    try {
        let reqbody = req.body
        let params = req.params
        const MapelModel = require('../Repositories/MapelRepository');
        let response = await MapelModel.updatemap(params, reqbody);
        return (res, 200, true, "Data berhasil Dilihat", response)
    } catch (error) {
        return (res, 400, "Data invalid",error);
    }
}

exports.update = update
exports.destroy = destroy
exports.tampil = tampil
exports.create = create