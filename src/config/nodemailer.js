import nodemailer from "nodemailer";

export const transportor = nodemailer.createTransport({
  host: "",
  port: "",
  secure: "",
  auth: {
    user: "",
    pass: "",
  },
});
