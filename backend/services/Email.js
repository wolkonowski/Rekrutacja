const nodemailer = require("nodemailer");
var service;
// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account. " + err.message);
    return;
  }

  // Create a SMTP transporter object
  service = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });
});
/// Can be replaced by any function with following call parameters
function send(name, address, topic, message, html) {
  html = (typeof html !== "undefined") ? html : message;
  let mail = {
    from: "Restaurant Solvro <restaurant@solvro.pl>",
    to: `${name} <${address}>`,
    subject: topic,
    text: message,
    html: html,
  };
  service.sendMail(mail, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return;
    }

    console.log("Message sent: %s", topic);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}
module.exports = send;
