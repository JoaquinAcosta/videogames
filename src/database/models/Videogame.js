
module.exports = (sequelize, dataTypes) => {

    const alias = 'Videogame';
    
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        platform: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },

    };

    const config = {
        tableName: "videogames",
        timestamps: false,
    }

    const Videogame = sequelize.define(alias, cols, config);

    return Videogame;
}
