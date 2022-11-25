//var ProductService = require('../Services/ProductService');
var ProductService = require('../Services/ProductService');
var response = require('../response')

async function create (req, res){
	try {
		const requestUser = await ProductService.addProd(req);
		let reqData = requestUser
        if (typeof reqData == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', reqData);
        }

	} catch (error) {
		return response(res, 400, true ,'Data Invalid',error);
	}
}

module.exports.create = create

