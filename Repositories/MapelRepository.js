const BaseRepository = require('./BaseRepository');
const MapelModel = require('../Models/Mapel');

BaseRepository.setModel(MapelModel);

async function insert(req) {
   return MapelModel.create(req).then(Result => {
       return Result;
   }).catch(err => {
       console.error("Unable to insert data", err);
       return "error";
   })
}

async function findAll(req) {
    return this.getModel().findAll(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to Get data", err);
        return "error";
    })
}

async function deleteMapel(params , req) {
    return this.getModel().destroy({
        where: {
          id: params.id
        }
      }).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to Get data", err);
        return "error";
    })
}

module.exports. deleteMapel = deleteMapel;
module.exports. findAll = findAll;
module.exports. insert = insert;
 
 module.exports = BaseRepository;