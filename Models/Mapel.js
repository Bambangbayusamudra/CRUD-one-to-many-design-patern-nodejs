/*** Table Name ***/
var tableName = 'mapel';

/*** Same for all Models */
const Base = require('./Base');
class Siswa extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Siswa.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		jenis_mapel: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'jenis_mapel'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var MapelModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = MapelModel;