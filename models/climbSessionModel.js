const { Sequelize, DataTypes } = require("sequelize")

/**
 * Participation Builder
 * @param { Sequelize } sequelize
 */


const climbSessionBuilder = (sequelize) => {
    const ClimbSession = sequelize.define(
        'climbSession',
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
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW

            },
            lieu: {
                type: DataTypes.STRING(200),
                allowNull: false


            },
            heure_debut: {
                type: DataTypes.TIME,
                allowNull: false


            },
            duree: {
                type: DataTypes.INTEGER,
                allowNull: true

            },
            partenaire: {
                type: DataTypes.STRING(200),
                allowNull: true


            },
            objectif: {
                type: DataTypes.INTEGER,
                allowNull: true


            },
            notes: {
                type: DataTypes.STRING(500),
                allowNull: true


            },


        },
        {
            tableName: 'climbSession'
        }
    )
    return ClimbSession;
}


module.exports = climbSessionBuilder;