const {Model, DataTypes} = require('sequelize');

class Address extends Model {
    static init(sequelize){  // conexão com a base de dados
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        },{
            sequelize
        }) 
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Address;