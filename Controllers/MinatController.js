const MinatService = require('../Services/MinatService');
const response = require('../response');


async function create(req, res) {
	try {
		const request = await MinatService.create(req);
        // console.log("=======request create========")
        // console.log("request")
        // console.log(request)
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
        const detail = await MinatService.tampil(req);
        
        let find = detail
        if(typeof find == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', find);
        }
    } catch (error) {
        return response(res, 400, false ,'Failed Send Request To Service', error);
    }
}

async function update(req,res){
    try {
        const updateData = await MinatService.update(req);
        let update = updateData
        if(typeof update == undefined){
            return response(res, 200, true, "Succes Send Request To Service", update )
        }
    } catch (error) {
        return response(res, 400, false, "Data Not Update", error)   
    }
}

module.exports.update = update
module.exports.tampil = tampil
module.exports.create = create 