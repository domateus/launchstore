const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fd651d22bc893f",
      pass: "bea166f22b561f"
    }
  });

  