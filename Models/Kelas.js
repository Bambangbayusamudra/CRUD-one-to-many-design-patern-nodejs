/*** Table Name ***/
var tableName = 'kelas';

/*** Same for all Models */
const Base = require('./Base');
class Kelas extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Kelas.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		siswaid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'siswaid'
		},
		jenis_kelas: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'jenis_kelas'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var KelasModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = KelasModel;