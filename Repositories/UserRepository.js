/*** 
 * UserModelRepository 
 **/

const BaseRepository = require('./BaseRepository');
const UserModel = require('../Models/User');

BaseRepository.setModel(UserModel);


//create user
async function insert(req) {
    return UserModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}

module.exports.insert = insert;
module.exports = BaseRepository;