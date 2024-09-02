import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "noreply@braininventory.com",
    pass: "Kb<mUby8TXGA3aW&",
  },
});
export function ppcMail(mailData) {
  return new Promise((resolve, reject) => {
    let config = {
      from: `"Brain Inventory" <noreply@braininventory.com>`,
      to: `askus@braininventory.com`,
      subject: "Social Network Inquiry",
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
export function ppcMailThank(mailData) {
  return new Promise((resolve, reject) => {
    let config = {
      from: `"Brain Inventory" <noreply@braininventory.com>`,
      to: mailData.email,
      subject: `Wow, ${
        mailData.fullName.split(" ")[0]
      }! Interesting requirement, give us sometime to get back to you!`,
      text: `Hello, ${mailData.fullName}! \nThanks for your valuable consideration in reaching to Brain Inventory, a culture rich development company which turns ideas into reality, our team is evaluating your requirement and you will be receiving a reply for the team within next 24 hours! For Immediate assistance Book a timeslot here: Be excited, your dream is going to be a reality soon ! https://calendly.com/alishakhan09`,
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
