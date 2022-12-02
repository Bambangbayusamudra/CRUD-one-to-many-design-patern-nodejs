const MapelService = require('../Services/MapelService');
const response = require('../response');


async function create(req, res) {
	try {
		const request = await MapelService.create(req, res);
        // console.log("=======request create========")
        console.log(request)
        let reqData = request
        if (typeof reqData == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', reqData);
        }

	}catch (error) {
        // console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}
};

async function tampil(req, res) {
	try {
		const request = await MapelService.tampil(req, res);
        // console.log(request);
        if (typeof request == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', request);
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}
};

async function destroy(req, res) {
	try {
		const request = await MapelService.destroy(req, res);
        if (typeof request == undefined){
            return response(res, 400, false ,'Delete not found');
        }else{
            return response(res, 200, true ,'Success Delete ', request.dataValues);
        }

	}catch (error) {
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}
};

async function update(req, res){
    console.log(req)
    try {
        // console.log(req)
		const request = await MapelService.update(req);
        if (typeof request == undefined){
            return response(res, 400, false ,'Updated Failed');
        }else{
            return response(res, 200, true ,'Success Update Mapel', request);
        }

	}catch (error) {
        console.log(error)
		return response(res, 400, false ,'Failed Send Request To Service', error);
	}

}

exports.update = update
exports.destroy = destroy
exports.tampil = tampil
exports.create = create