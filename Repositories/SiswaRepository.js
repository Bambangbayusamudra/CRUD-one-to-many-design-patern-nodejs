/*** 
 * ProductRepository 
 **/

 const SiswaRepository = require('./BaseRepository');
 const SiswaModel = require('../Models/Siswa');
//  const MinatModel = require('../Models/Minat');
 const MapelModel = require('../Models/Mapel');
 
 SiswaRepository.setModel(SiswaModel);

 async function insert(req) {
    return SiswaModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

async function findAll() {
    return SiswaModel.findAll().then(Result => {
        console.log(Result);
        return Result;
    }).catch(err => {
        console.error("Unable to Get data", err);
        return "error";
    })
}

function findEndpoint (id) {
    SiswaRepository.setModel(SiswaModel);
    console.log(">>>>"+SiswaRepository.getModel()) 
    SiswaModel.hasOne(MapelModel,{foreignKey: 'id', sourceKey: 'mapelid'});
    // MinatModel.hasMany(MapelModel,{foreignKey: 'id', sourceKey: 'mapelid'});

    // SiswaModel.hasOne(MinatModel,{foreignKey: 'siswaid', sourceKey: 'id'});
    // MinatModel.belongsTo(SiswaModel,{foreignKey: 'siswaid', targetKey: 'id'});
    
    // MapelModel.hasOne(MinatModel,{foreignKey: 'mapelid', sourceKey: 'id'});
    // MinatModel.belongsTo(MapelModel,{foreignKey: 'mapelid', targetKey: 'id'});

    return MinatRepository.fetchIncluded("",[MapelModel]);
};
module.exports. insert = insert;
module.exports. findAll = findAll;
module.exports. findEndpoint = findEndpoint;
module.exports.SiswaRepository = SiswaRepository;