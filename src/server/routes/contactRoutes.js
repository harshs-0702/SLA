const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await db.query(
      `INSERT INTO contacts
       (name,email,phone,message)
       VALUES (?,?,?,?)`,
      [name, email, phone, message]
    );

    res.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;