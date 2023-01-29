const {Model, DataTypes} = require('sequilize');

class category extends Model {}

category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        category_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    }
);

module.exports = category;