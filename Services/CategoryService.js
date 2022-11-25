var CategoryModel = require('../Models/Category');
var UserModel = require('../Models/User');
var CategoryRepository = require('../Repositories/CategoryRepository')

async function addCategory(req){
    try {
        const createCategory = await CategoryRepository.addCategory(req);
        return createCategory;
    } catch (error) {
        
    }
}

module.exports.addCategory =addCategory



// module.exports.fetchCategorys = (id) => {    
//     var CategoryRepository = require('../Repositories/CategoryRepository');
//     CategoryModel.hasMany(UserModel, {foreignKey: 'id',sourceKey:'userid'});//correct and working
//     return CategoryRepository.fetchIncluded(id,[UserModel]);
// }
// module.exports.fetchCategory = (id) => {    
//     var ProductRepository = require('../Repositories/ProductRepository');
//     ProductModel.belongsToMany(CategoryProductModel, {foreignKey: 'id',sourceKey:'idCategory'});//correct and working
//     return ProductRepository.fetchIncluded(id,[CategoryProductModel]);
// }