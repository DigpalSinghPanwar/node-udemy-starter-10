const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Createa transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    //  Activate in gmail 'less secure app' option
    // sendGrid and mailGun most popular
    // for dev use mailtrap
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Digpal Singh <singh@user.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3) Actually send the email

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
