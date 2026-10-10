

// const express = require("express");
// const router = express.Router();
// const db = require("../db");
// const sendMail = require("../utils/sendMail");

// router.post("/", async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     console.log("Contact API hit");

//     // Save in DB
//     await db.query(
//       `INSERT INTO contacts (name,email,phone,message)
//        VALUES (?,?,?,?)`,
//       [name, email, phone, message]
//     );

//     console.log("Data inserted");

//     // Send Email
//     await sendMail({ name, email, phone, message });

//     console.log("Mail function completed");

//     res.json({
//       success: true,
//       message: "Inquiry submitted successfully",
//     });

//   } catch (err) {
//     console.error("Route Error:", err);

//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: err.message,
//     });
//   }
// });

// router.get("/users", async (req, res) => {
//   try {
//     const [rows] = await db.query("SELECT * FROM users");
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const Contact = require("../../models/Contact");
const sendMail = require("../utils/sendMail");

// Save Contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    await sendMail({ name, email, phone, message });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: contact,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Get All Contacts
router.get("/users", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json(contacts);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;