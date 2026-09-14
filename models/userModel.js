const { Sequelize, DataTypes } = require("sequelize");


/**
 * Participation Builder
 * @param { Sequelize } sequelize
 */



// Initialisation des modèles qui serviront à créer les tables dans la DB
const userBuilder = (sequelize) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                autoIncrementIdentity: true
            },
            nom: {
                type: DataTypes.STRING(200),
                allowNull: false

            },
            prenom: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(320),
                allowNull: false,
                unique: 'UK_User_Email'
            },
            mdp: {
                type: DataTypes.STRING(120),
                allowNull: false
            },

            taille: {
                type: DataTypes.FLOAT,
                allowNull: true

            },
            poids: {
                type: DataTypes.FLOAT,
                allowNull: true

            },
            envergure: {
                type: DataTypes.FLOAT,
                allowNull: true

            },
            objectif: {
                type: DataTypes.STRING(300),
                allowNull: true
            },
            date_creation: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
                // création de la date quand le user est créé
            },

            role: {
                type: DataTypes.ENUM('User', 'Admin'),
                allowNull: false,
                defaultValue: 'User'
            },

        },

        {
            tableName: 'user'
        }
    )

    return User;

}

module.exports = userBuilder;
