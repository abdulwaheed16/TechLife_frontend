import { transportor } from "@/config/nodemailer";

export const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const mailOptions = {
      from: "",
      to: "",
      subject: "",
      text: "",
    };

    const info = transportor.sendMail(mailOptions);
  }
};
