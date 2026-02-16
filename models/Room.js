const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Room = sequelize.define("Room", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  location: DataTypes.STRING
});

Room.belongsTo(User, { foreignKey: "ownerId" });
User.hasMany(Room, { foreignKey: "ownerId" });

module.exports = Room;
