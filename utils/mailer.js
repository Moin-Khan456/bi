import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply@braininventory.com",
    pass: "yvzsguylwgjdyspo",
  },
});

export function sendMail(mailData) {
  return new Promise((resolve, reject) => {
    let config = {
      from: `"Brain Inventory" <noreply@braininventory.com>`,
      to: mailData.to,
      subject: mailData.subject,
      html: mailData.html,
    };

    if (mailData.attachments) {
      config.attachments = mailData.attachments;
    }

    transporter
      .sendMail(config)
      .then(() => {
        resolve({
          success: true,
          message: "Email sent",
        });
      })
      .catch((error) => {
        reject({
          success: false,
          message: error.message,
        });
      });
  });
}
