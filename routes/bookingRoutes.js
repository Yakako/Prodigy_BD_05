const express = require("express");
const auth = require("../middleware/authMiddleware");
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const { Op } = require("sequelize");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { roomId, checkIn, checkOut } = req.body;

  const existing = await Booking.findOne({
    where: {
      roomId,
      [Op.or]: [
        {
          checkIn: { [Op.between]: [checkIn, checkOut] }
        },
        {
          checkOut: { [Op.between]: [checkIn, checkOut] }
        }
      ]
    }
  });

  if (existing)
    return res.status(400).json({ message: "Room not available" });

  const booking = await Booking.create({
    roomId,
    userId: req.user.id,
    checkIn,
    checkOut
  });

  res.status(201).json(booking);
});

router.get("/", auth, async (req, res) => {
  const bookings = await Booking.findAll({
    where: { userId: req.user.id }
  });
  res.json(bookings);
});

module.exports = router;
