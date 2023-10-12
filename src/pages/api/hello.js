import nodemailer from "nodemailer";

export default async function handler(req, res) {
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

    res.status(200).json({ message: "Testing message of GET method" });
  }
}
