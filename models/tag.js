const {Model, DataTypes} = require('sequilize');

class tag extends model {}

tag.init (
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
);

module.exports = tag;