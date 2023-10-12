import nodemailer from "nodemailer";

export const transportor = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "abwaheed.ahmed@gmail.com",
    pass: "",
  },
});
