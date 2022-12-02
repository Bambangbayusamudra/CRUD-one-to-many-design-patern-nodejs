/*** 
 * ProductRepository 
 **/
 const MinatRepository = require('./BaseRepository')
//  const BaseRepository = require('./BaseRepository');
 const MinatModel = require('../Models/Minat');
 const SiswaModel = require('../Models/Siswa');
 const MapelModel = require('../Models/Mapel');
 
MinatRepository.setModel(MinatModel);
//  BaseRepository.setModel(MinatModel);
 
 async function insert(req) {
    return MinatModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

function findEndpoint (id) {
    MinatRepository.setModel(MinatModel);
    console.log(">>>>"+MinatRepository.getModel()) 
    MinatModel.hasOne(SiswaModel,{foreignKey: 'id', sourceKey: 'siswaid'});
    SiswaModel.belongsTo(MinatModel,{foreignKey: 'id', sourceKey: 'siswaid'});
    
    MinatModel.hasOne(MapelModel,{foreignKey: 'id', sourceKey: 'mapelid'});
    MapelModel.belongsTo(MinatModel,{foreignKey: 'id', sourceKey: 'mapelid'});
    
    // MinatModel.hasOne(MapelModel,{foreignKey: 'id', sourceKey: 'mapelid'});
    // MinatModel.hasOne(SiswaModel,{foreignKey: 'id', sourceKey: 'siswaid'});
    return MinatRepository.fetchIncluded("",[SiswaModel, MapelModel]);
//         {
//             model: MinatModel,
//             where: {
//                 // provider_id: providerId,
//                 siswaid: siswaid
//             }
//         }    
//     ]);
}
async function findAll() {
    return MinatModel.findAll().then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to Get data", err);
        return "error";
    })
}


module.exports.findAll = findAll
module.exports.findEndpoint = findEndpoint
module.exports.insert = insert 
module.exports.MinatRepository = MinatRepository;
