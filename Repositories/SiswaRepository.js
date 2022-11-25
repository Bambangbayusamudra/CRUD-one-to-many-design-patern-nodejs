/*** 
 * ProductRepository 
 **/

 const BaseRepository = require('./BaseRepository');
 const SiswaModel = require('../Models/Siswa');
//  const MinatModel = require('../Models/Minat');
 
 BaseRepository.setModel(SiswaModel);

 async function insert(req) {
    return SiswaModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

// const hasMany = async(params,res) => {
//     try {
//         SiswaModel.hasMany(MinatModel, {foreignKey: 'id',sourceKey:'siswaid'});//correct and working
//         return BaseRepository.fetchIncluded(id,[MinatModel]);
//         // return dataMapel;
//     } catch (error) {
//         return error
//     }
// } 
// module.exports. hasMany = hasMany;
module.exports. insert = insert;
 
 module.exports = BaseRepository;