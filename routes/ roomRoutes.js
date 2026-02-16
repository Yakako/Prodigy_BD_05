const express = require("express");
const auth = require("../middleware/authMiddleware");
const Room = require("../models/Room");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const room = await Room.create({
    ...req.body,
    ownerId: req.user.id
  });
  res.status(201).json(room);
});

router.get("/", async (req, res) => {
  const rooms = await Room.findAll();
  res.json(rooms);
});

router.put("/:id", auth, async (req, res) => {
  const room = await Room.findByPk(req.params.id);
  if (!room) return res.status(404).json({ message: "Room not found" });

  if (room.ownerId !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  await room.update(req.body);
  res.json(room);
});

router.delete("/:id", auth, async (req, res) => {
  const room = await Room.findByPk(req.params.id);
  if (!room) return res.status(404).json({ message: "Room not found" });

  if (room.ownerId !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  await room.destroy();
  res.json({ message: "Room deleted" });
});

module.exports = router;
