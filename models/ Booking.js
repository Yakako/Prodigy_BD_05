const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Room = require("./Room");

const Booking = sequelize.define("Booking", {
  checkIn: DataTypes.DATE,
  checkOut: DataTypes.DATE
});

Booking.belongsTo(User, { foreignKey: "userId" });
Booking.belongsTo(Room, { foreignKey: "roomId" });

module.exports = Booking;
