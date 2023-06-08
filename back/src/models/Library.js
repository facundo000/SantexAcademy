const { DataTypes, Model } = require("sequelize");
const { dbInstance } = require("../db/sequelize-config");

class Library extends Model {

}

/* Acà defino el modelo de Library */
Library.init({
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
  {
    sequelize: dbInstance,
    modelName: "Library",
    createdAt: false,
    updatedAt: false
  }
);

module.exports = { Library };