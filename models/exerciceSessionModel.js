const { Sequelize, DataTypes } = require("sequelize")

/**
 * Exercice Session Builder
 * @param { Sequelize } sequelize
 */

const exerciceSessionBuilder = (sequelize) => {
    const ExerciceSession = sequelize.define(
        'exerciceSession',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                autoIncrementIdentity: true
            },

            session_renfo_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },

            exercice_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },

            charge: {
                type: DataTypes.FLOAT,
                allowNull: true
            },

            nombre_series: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            objectif_reps: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            temps_repos: {
                type: DataTypes.INTEGER,
                allowNull: true
            },

            notes: {
                type: DataTypes.STRING(500),
                allowNull: true
            }
        },
        {
            tableName: 'exerciceSession'
        }
    )

    return ExerciceSession;
}

module.exports = exerciceSessionBuilder;