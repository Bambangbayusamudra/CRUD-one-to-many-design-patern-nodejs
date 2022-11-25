/*** Table Name ***/
var tableName = 'product';

/*** Same for all Models */
const Base = require('./Base');
class Product extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Product.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'name'
		},
		descript: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'descript'
		},
		price: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'price'
		},
		userid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'userid'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var ProductModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = ProductModel;