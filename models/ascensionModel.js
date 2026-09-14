const { Sequelize, DataTypes } = require("sequelize")

/**
 * Participation Builder
 * @param { Sequelize } sequelize
 */


const ascensionBuilder = (sequelize) => {
    const Ascension = sequelize.define(
        'ascension',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                autoIncrementIdentity: true

            },
            session_id: {
                type: DataTypes.BIGINT,
                allowNull: false

            },
            type: {
                type: DataTypes.STRING(10),
                allowNull: false

            },
            nom: {
                type: DataTypes.STRING(200),
                allowNull: true

            },
            cotation: {
                type: DataTypes.STRING(200),
                allowNull: false

            },
            secteur: {
                type: DataTypes.STRING(200),
                allowNull: true

            },
            couleur: {
                type: DataTypes.STRING(200),
                allowNull: true

            },
            resultat: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            nombre_essais: {
                type: DataTypes.BIGINT,
                allowNull: false

            },
            type_realisation: {
                type: DataTypes.STRING(200),
                allowNull: true

            },
            styles: {
                type: DataTypes.STRING(500),
                allowNull: true

            },
            commentaire: {
                type: DataTypes.STRING(500),
                allowNull: true

            },
        },
        {
            tableName: 'ascension'
        }
    )
    return Ascension;
}


module.exports = ascensionBuilder;