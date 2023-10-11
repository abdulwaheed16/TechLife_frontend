import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    const transportor = nodemailer.createTransport({
      host: "",
      port: "",
      secure: "",
      auth: {
        user: "",
        pass: "",
      },
    });
  }
  res.status(400).json({ message: "bad request" });
}
