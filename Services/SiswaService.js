var SiswaModel = require('../Models/Siswa')
var MinatModel = require('../Models/Minat')

async function create(req, res){
    // console.log(req)
    try {
        const reqbody = req.body;   
        let payload = {
            nama : reqbody.nama,
            nis : reqbody.nis
        }
        const SiswaRepository = require('../Repositories/SiswaRepository');
       let request = await SiswaRepository.insert(payload);
        return (res, 200, true, "Data berhasil di tambahkan",request)

    } catch (error) {
        console.log(error)
        return (res, 400, "Data invalid",error);
    }
}

async function tampil(req, res){
    try {
        const SiswaRepository = require('../Repositories/SiswaRepository');
        const id = req.params
        let response = await SiswaRepository.findAll();
        // let find = await SiswaRepository.findEndpoint(id)
        return response;
        
        // console.log(response);
        // return (res, 200, true, "Data berhasil Dilihat", response)
    } catch (error) {
        return (res, 400, "Data invalid",error);
    }
}
async function update(req, res){
    try {
        let reqbody = req.body
        let params = req.params
        const SiswaRepository = require('../Repositories/SiswaRepository');
        let response = await SiswaRepository.update(params, reqbody);
        return (res, 200, true, "Data berhasil Dilihat", response)

    } catch (error) {
        return (res, 400, "Data invalid",error);
    }
}

async function destroy(req, res){
    try {
        let reqbody = req.body
        let params = req.params
        const SiswaRepository = require('../Repositories/SiswaRepository');
        let response = await SiswaRepository.destroy(params, reqbody); 
        return response;
    } catch (error) {
        return error
    }
}

exports.update = update
exports.tampil = tampil
exports.create = create
exports.destroy = destroy