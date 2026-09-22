const { Sequelize, DataTypes } = require("sequelize")

/**
 * SessionRenfo Builder
 * @param { Sequelize } sequelize
 */

const sessionRenfoBuilder = (sequelize) => {
    const SessionRenfo = sequelize.define(
        'sessionRenfo',
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

            notes: {
                type: DataTypes.STRING(500),
                allowNull: true
            },

            
            terminee: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },

        },
        {
            tableName: 'sessionRenfo'
        }
    )

    return SessionRenfo;
}

module.exports = sessionRenfoBuilder;