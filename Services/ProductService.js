var ProductModel = require('../Models/Product');
var UserModel = require('../Models/User');
var ProductRepository = require('../Repositories/ProductRepository')

async function addProd(res, req){
    try {
        const reqbody = req.body 

        const createProduct = await ProductRepository.insert({
            name : reqbody.name,
            descript : reqbody.descript,
            price : reqbody.price,
            userid : reqbody.userid
        });
        let reqData = createProduct
        if(typeof reqData == undefined ){
            return (res, 201, false, "Data Not found")
        }else{

            return (res, 200, true, "Data valid", reqData)
        }
    } catch (error) {
        return (res, 400, false, "Data invalid", error)
    }
}

module.exports.addProd =addProd



// module.exports.fetchProducts = (id) => {    
//     var ProductRepository = require('../Repositories/ProductRepository');
//     ProductModel.hasMany(UserModel, {foreignKey: 'id',sourceKey:'userid'});//correct and working
//     return ProductRepository.fetchIncluded(id,[UserModel]);
// }
// module.exports.fetchCategory = (id) => {    
//     var ProductRepository = require('../Repositories/ProductRepository');
//     ProductModel.belongsToMany(CategoryProductModel, {foreignKey: 'id',sourceKey:'idCategory'});//correct and working
//     return ProductRepository.fetchIncluded(id,[CategoryProductModel]);
// }