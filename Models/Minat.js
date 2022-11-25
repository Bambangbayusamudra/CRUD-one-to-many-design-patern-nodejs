/*** Table Name ***/
var tableName = 'minat_mapel';

/*** Same for all Models */
const Base = require('./Base');
class Minat extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Minat.init({
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
		siswaid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'siswaid'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var MinatModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = MinatModel;