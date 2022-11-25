const SiswaService = require('../Services/SiswaService');
const response = require('../response');


async function create(req, res) {
	try {
        // console.log(req)
		const request = await SiswaService.create(req, res);
        // console.log("=======request create========")
        let reqData = request
        if (typeof reqData == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', reqData.dataValues);
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}
};
 async function tampil(req, res){
    try {
		const request = await SiswaService.tampil(req);
        // console.log("==========request===========")
        // console.log(request.dataValues)
        let reqData = request
        if (typeof reqData == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', reqData);
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}

}
 async function update(req, res){
    try {
        console.log(req)
		const request = await SiswaService.update(req);
        if (typeof request == undefined){
            return response(res, 400, false ,'Updated Failed');
        }else{
            return response(res, 200, true ,'Success Update Siswa');
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}

}

async function deleteSiswa(req, res){
    try {
        const request = await SiswaService.deleteSiswa(req);
        console.log(request)
        if (typeof request == undefined){
            return response(res, 400, false ,'Delete Failed');
        }else{
            return response(res, 200, true ,'Success Delete Siswa');
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}

}


exports.update = update
exports.tampil = tampil
exports.create = create
exports.deleteSiswa = deleteSiswa
