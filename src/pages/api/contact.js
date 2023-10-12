import { transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const transportor = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "abwaheed.ahmed@gmail.com",
        pass: "AWM.2250.20",
      },
    });

    const mailOptions = {
      from: "abwaheed.ahmed@gmail.com",
      to: "abwaheed.ahmad@gmail.com",
      subject: "This is subject",
      text: "This is testing text",
    };

    // Try sending the email.
    try {
      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      // If the email fails to send, log the error and send a response to the client.
      console.log(error);
      res.status(500).send("Something went wrong while sending the email.");

      // Uncomment the following lines to troubleshoot the error.
      // console.log(mailOptions);
      // console.log(transportor);
    }
  } else {
    res.status(400).json({ message: "bad request" });
  }
}
