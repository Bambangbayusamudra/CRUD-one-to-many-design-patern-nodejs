/*** 
 * CategoryRepository 
 **/

 const BaseRepository = require('./BaseRepository');
 const CategoryModel = require('../Models/Category');
//  const MinatModel = require('../Models/Minat');
 
 BaseRepository.setModel(CategoryModel);

 const addCategory = async (req, res) => {
    try {
        const dataCategory = await CategoryModel.create(req.body)
        return dataCategory
    } catch (error) {
        return error;
    }
}


module.exports.addCategory =addCategory
 
 module.exports = BaseRepository;