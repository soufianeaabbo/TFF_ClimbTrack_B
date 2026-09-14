const { Sequelize, DataTypes } = require("sequelize")

/**
 * Exercice Builder
 * @param { Sequelize } sequelize
 */

const exerciceBuilder = (sequelize) => {
    const Exercice = sequelize.define(
        'exercice',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                autoIncrementIdentity: true
            },

            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },

            nom: {
                type: DataTypes.STRING(200),
                allowNull: false
            },

            categorie: {
                type: DataTypes.STRING(200),
                allowNull: false
            },

            equipement: {
                type: DataTypes.STRING(200),
                allowNull: true
            },

            description: {
                type: DataTypes.STRING(500),
                allowNull: true
            }
        },
        {
            tableName: 'exercice'
        }
    )

    return Exercice;
}

module.exports = exerciceBuilder;