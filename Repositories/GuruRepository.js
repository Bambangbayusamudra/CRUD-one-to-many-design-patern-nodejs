const GuruRepository = require('./BaseRepository')
//  const BaseRepository = require('./BaseRepository');
 const GuruModel = require('../Models/Guru');
 const MapelModel = require('../Models/Mapel');
 
GuruRepository.setModel(GuruModel);
 
 async function insert(req) {
    return GuruModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

function findEndpoint (nama) {
    GuruRepository.setModel(GuruModel);
    console.log(">>>>"+GuruRepository.getModel()) 
    GuruModel.hasMany(MapelModel,{foreignKey: 'id', sourceKey: 'mapelid'});
    MapelModel.belongsTo(GuruModel,{foreignKey: 'id', targetKey: 'mapelid'});
    
    // MapelModel.hasOne(MinatModel,{foreignKey: 'mapelid', sourceKey: 'id'});
    // MinatModel.belongsTo(MapelModel,{foreignKey: 'mapelid', targetKey: 'id'});

    return GuruRepository.fetchIncluded({nama: nama},[MapelModel]);
    // return GuruRepository.fetchIncluded({nama: nama},[MapelModel]);

}


module.exports.insert = insert
module.exports.findEndpoint = findEndpoint
module.exports.GuruRepository = GuruRepository