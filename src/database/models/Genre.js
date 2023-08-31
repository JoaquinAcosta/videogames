module.exports = (sequelize, dataTypes) => {

    const alias = 'Genre';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },

    };

    const config = {
        tableName: "genres",
        timestamps: false,
    }

    const Genre = sequelize.define(alias, cols, config)

    return Genre
}