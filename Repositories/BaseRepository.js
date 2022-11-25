/*** 
* BaseRepository 
**/

const { model } = require("../database/mysql");

module.exports.setModel = (model) => { 
    this.model = model;
}

module.exports.getModel = () => { 
    return this.model;
}

module.exports.fetchOne = (conditions) => {
    return this.getModel().findOne({
	  where: conditions 
	}).then(Result => {
      return Result;
    }).catch(err => {
        console.error('Unable to Fetch', err);
        return "error";
    });
};

module.exports.fetchIncluded = (conditions,Includes) => {
    // console.log(conditions);
    // console.log(Includes);

    return this.getModel().findAll({
      where: conditions ,
      include: Includes,
      logging: console.log,
	}).then(Result => {
      return Result;
    }).catch(err => {
        console.error('Unable to Fetch', err);
        return "error";
    });
};

async function insert(req) {
    return this.getModel().create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}
async function findAll() {
    return this.getModel().findAll().then(Result => {
        console.log(Result);
        return Result;
    }).catch(err => {
        console.error("Unable to Get data", err);
        return "error";
    })
}
async function update(params , req) {
    return this.getModel().update({ nama: req.nama, nis : req.nis }, {
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
async function deleteSiswa(params , req) {
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

async function destroy(params , req) {
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

async function updatemap(params , req) {
    return this.getModel().update({ jenis_mapel: req.jenis_mapel }, {
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

module.exports. updatemap = updatemap;
module.exports. update = update;
module.exports. findAll = findAll;
module.exports. insert = insert;
module.exports. deleteSiswa = deleteSiswa;
module.exports. destroy = destroy;