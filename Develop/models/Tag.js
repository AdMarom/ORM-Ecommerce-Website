const {Model, DataTypes} = require('sequilize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init (
    {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true,
        },
        tag_name: {
            tyep: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    },
);

module.exports = Tag;