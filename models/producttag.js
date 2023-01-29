const {Model, DataTypes} = require('sequilize');

class producttag extends Model {}

producttag.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id',
            },
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id',
            },
        },
    },
);

module.exports = producttag;