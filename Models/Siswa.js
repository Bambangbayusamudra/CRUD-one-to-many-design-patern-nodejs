/*** Table Name ***/
var tableName = 'siswa';

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
		nama: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'nama'
		},
		nis: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'nis'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var SiswaModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = SiswaModel;