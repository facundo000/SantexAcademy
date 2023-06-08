const { DataTypes, Model  } = require("sequelize");
const { Library } = require("./Library");
const { dbInstance } = require("../db/sequelize-config");

class Book extends Model {

}
Book.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        isbn: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: dbInstance,
        modelName: "Book",
        createdAt: false,
        updatedAt: false
    }
);

Book.belongsTo(Library, { foreignKey: 'libraryId' });

module.exports = { Book };