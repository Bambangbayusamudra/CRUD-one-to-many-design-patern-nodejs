/*** 
 * ProductRepository 
 **/

const BaseRepository = require('./BaseRepository');
const ProductModel = require('../Models/Product');

BaseRepository.setModel(ProductModel);

async function insert(req) {
    return ProductModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}
module.exports.insert = insert;
module.exports = BaseRepository;