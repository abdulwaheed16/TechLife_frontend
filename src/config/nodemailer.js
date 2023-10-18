import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "abwaheed.ahmed@gmail.com",
    pass: "heqrqapfwacnuleg",
  },
});
export const mailOptions = {
  from: data.email,
  // to: "sikandarhashmi96@gmail.com",
  to: "abwaheed.ahmad@gmail.com",
  subject: "Client@TheTechLife-testing",
  text: "This is testing text",
  html: email_template({ data }),
  // attachments: [
  //   {
  //     filename: "../../data/attachments/leads.xlsx",
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     content: "",
  //   },
  // ],
};
