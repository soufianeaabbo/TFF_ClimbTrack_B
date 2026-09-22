const { Sequelize } = require("sequelize");

const userBuilder = require("./userModel");
const climbSessionBuilder = require("./climbSessionModel");
const ascensionBuilder = require("./ascensionModel");
const exerciceBuilder = require("./exerciceModel");
const exerciceSessionBuilder = require("./exerciceSessionModel");
const sessionRenfoBuilder = require("./sessionRenfoModel");


const sequelize = new Sequelize(
  "ClimbTrack",
  "climbtrack",
  "climbtrack123",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);


// Initialisation des modèles utilisés par la DB
const db = {};
db.sequelize = sequelize;

db.User = userBuilder(sequelize)
db.ClimbSession = climbSessionBuilder(sequelize)
db.Ascension = ascensionBuilder(sequelize)
db.Exo = exerciceBuilder(sequelize)
db.SessionExo = exerciceSessionBuilder(sequelize)
db.SessionRenfo = sessionRenfoBuilder(sequelize)


// Définition des relations entre les modèles
// User 1 ─── N ClimbSession
db.User.hasMany(db.ClimbSession, {
    foreignKey: {
        allowNull: false,
        name: 'user_id'
    }
});

db.ClimbSession.belongsTo(db.User, {
    foreignKey: {
        allowNull: false,
        name: 'user_id'
    }
});



// ClimbSession 1 ─── N Ascension
db.ClimbSession.hasMany(db.Ascension, {
    foreignKey: {
        allowNull: false,
        name: 'session_id'
    }
});

db.Ascension.belongsTo(db.ClimbSession, {
    foreignKey: {
        allowNull: false,
        name: 'session_id'
    }
});


// User 1 ─── N Exo
db.User.hasMany(db.Exo, {
    foreignKey: 'user_id'
        
});

db.Exo.belongsTo(db.User, {
    foreignKey: 'user_id'
});



// Exo 1 ─── N SessionExo

db.Exo.hasMany(db.SessionExo, {
    foreignKey: 'exercice_id'
});

db.SessionExo.belongsTo(db.Exo, {
    foreignKey: 'exercice_id'
});


// User 1 ─── N SessionRenfo

db.User.hasMany(db.SessionRenfo, {
    foreignKey: 'user_id'
});

db.SessionRenfo.belongsTo(db.User, {
    foreignKey: 'user_id'
});


// SessionRenfo 1 ─── N SessionExo

db.SessionRenfo.hasMany(db.SessionExo, {
    foreignKey: 'session_renfo_id'
});

db.SessionExo.belongsTo(db.SessionRenfo, {
    foreignKey: 'session_renfo_id'
});






module.exports = db;