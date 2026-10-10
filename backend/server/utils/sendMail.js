

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// transporter.verify((error) => {
//   if (error) {
//     console.log("SMTP Error:", error);
//   } else {
//     console.log("Email server ready ✔");
//   }
// });

// // const sendMail = async ({ name, email, phone, message }) => {
// //   const mailOptions = {
// //     from: `"${name}" <${process.env.EMAIL_USER}>`,
// //     // to: process.env.EMAIL_TO,
// //     to: email, 
// //     subject: `🎨 New Order Inquiry from ${name}`,
// //     html: `
// //       <h3>New Inquiry Received</h3>
// //       <p><b>Name:</b> ${name}</p>
// //       <p><b>Email:</b> ${email}</p>
// //       <p><b>Phone:</b> ${phone}</p>
// //       <p><b>Message:</b> ${message}</p>
// //     `,
// //   };

// //   console.log("Sending mail...");

// //   const info = await transporter.sendMail(mailOptions);

// //   console.log("Email sent ✔:", info.messageId);
// // };

// // module.exports = sendMail;
// const sendMail = async ({ name, email, phone, message }) => {
//   const mailOptions = {
//     from: `"${name}" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER, // 👈 ADMIN (YOU) RECEIVE MAIL
//     replyTo: email, // 👈 CLIENT EMAIL (reply button kaam karega)

//     subject: `🎨 New Order Inquiry from ${name}`,

//     html: `
//       <h3>New Inquiry Received</h3>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Phone:</b> ${phone}</p>
//       <p><b>Message:</b> ${message}</p>
//     `,
//   };

//   console.log("Sending mail...");

//   const info = await transporter.sendMail(mailOptions);

//   console.log("Email sent ✔:", info.messageId);
// };

// module.exports = sendMail;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Email server ready ✔");
  }
});

const sendMail = async ({ name, email, phone, message }) => {
  try {
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Order Inquiry from ${name}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    console.log("Sending mail...");

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent ✔:", info.messageId);

  } catch (err) {
    console.error("Email error:", err);
  }
};

module.exports = sendMail;