//var ProductService = require('../Services/ProductService');
var UserService = require('../Services/UserService');
var response = require('../response')

async function UserCreate (req, res){
	try {
		const requestUser = await UserService.UserCreate(req, res);
		console.log(requestUser)
		let reqData = requestUser
        if (typeof reqData == undefined){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Service', reqData.dataValues);
        }

	} catch (error) {
		return response(res, 400, true ,'Data Invalid',error);
	}
}

module.exports.UserCreate = UserCreate

// exports.products = (req, res, next) => {
// 	ProductService.fetchProducts({id: '1'})
// 	.then((r)=> {
// 		res.json(r);
// 	});
// };

// exports.profile = (req, res, next) => {
// 	// res.json("hi");
// 	UserService.fetchUser({id: '1'})
// 	.then((r)=> {
// 		res.json(r);
// 	})
// };