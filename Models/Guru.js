/*** Table Name ***/
var tableName = 'guru';

/*** Same for all Models */
const Base = require('./Base');
class Guru extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Guru.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		mapelid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'mapelid'
		},
		nama: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'nama'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var GuruModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = GuruModel;