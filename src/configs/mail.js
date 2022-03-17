const nodemailer = require("nodemailer");

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "17c83f4793fac5", // generated ethereal user
      pass: "97b5ed5af70027", // generated ethereal password
    },
  });
