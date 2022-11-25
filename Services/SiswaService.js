var SiswaModel = require('../Models/Siswa')
var MinatModel = require('../Models/Minat')

async function create(req, res, id){
    // console.log(req)
    try {
        const reqbody = req.body;

        // SiswaModel.hasMany(MinatModel, {foreignKey: 'id',sourceKey:'siswaid'});//correct and working
        // return BaseRepository.fetchIncluded(id,[MinatModel]);

        // var onetomany = await SiswaRepository.hasMany(params, reqbody);
    
        const SiswaRepository = require('../Repositories/SiswaRepository');
       let request = await SiswaRepository.insert({
            nama : reqbody.nama,
            nis : reqbody.nis
        });
        // SiswaModel.hasOne(MinatModel, {foreignKey: 'siswaid',sourceKey: 'id'});
        // return SiswaRepository.fetchIncluded(id,[ProductModel], request);
        return (res, 200, true, "Data berhasil di tambahkan",request)

    } catch (error) {
        console.log(error)
        return (res, 400, "Data invalid",error);
    }
}

async function tampil(req, res){
    try {
        // let reqbody = req.body

        const SiswaRepository = require('../Repositories/SiswaRepository');
        let response = await SiswaRepository.findAll();
        console.log(response);
        return (res, 200, true, "Data berhasil Dilihat", response[0])
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
        return (res, 200, true, "Data berhasil Dilihat", response[0])

    } catch (error) {
        return (res, 400, "Data invalid",error);
    }
}

async function deleteSiswa(req, res){
    try {
        let reqbody = req.body
        let params = req.params
        const SiswaRepository = require('../Repositories/SiswaRepository');
        let response = await SiswaRepository.deleteSiswa(params, reqbody); 
        return (res, 200, true, "Data berhasil Dilihat", response[0])
    } catch (error) {
        return (res, 400, "Data invalid",error);
    }
}

exports.update = update
exports.tampil = tampil
exports.create = create
exports.deleteSiswa = deleteSiswa