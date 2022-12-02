const KelasRepository = require('./BaseRepository')
//  const BaseRepository = require('./BaseRepository');
 const KelasModel = require('../Models/Kelas');
 const SiswaModel = require('../Models/Siswa')
 
KelasRepository.setModel(KelasModel);
//  BaseRepository.setModel(KelasModel);
 
 async function insert(req) {
    return KelasModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

function findEndpoint (id) {
    KelasRepository.setModel(KelasModel);
    console.log(">>>>"+KelasRepository.getModel()) 
    SiswaModel.belongsTo(KelasModel,{foreignKey: 'id', targetKey: 'siswaid'});
    KelasModel.hasMany(SiswaModel,{foreignKey: 'id', sourceKey: 'siswaid'});

    // MapelModel.hasOne(MinatModel,{foreignKey: 'mapelid', sourceKey: 'id'});
    // MinatModel.belongsTo(MapelModel,{foreignKey: 'mapelid', targetKey: 'id'});

    return KelasRepository.fetchIncluded("",[SiswaModel]);
}


module.exports.insert = insert
module.exports.findEndpoint = findEndpoint
module.exports.KelasRepository = KelasRepository