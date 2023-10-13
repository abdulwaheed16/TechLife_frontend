import { transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";
import xlsx from "xlsx";
// import { users as data } from "@/mock/mock-data";
import { Leads } from "@/utils/leads";
import { email_template } from "@/utils/Email-Template";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const filedata = Leads()
    const transportor = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "abwaheed.ahmed@gmail.com",
        pass: "heqrqapfwacnuleg",
      },
    });

    const mailOptions = {
      from: "test@gmail.com",
      to: "abwaheed.ahmad@gmail.com",
      subject: "This is subject",
      text: "This is testing text",
      html: email_template(data),
      attachments: [
        {
          filename: "../../data/attachments/leads.xlsx",
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          content: "",
        },
      ],
    };

    // Try sending the email.
    try {
      const info = await transportor.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);
      res
        .status(200)
        .send({ message: "Email sent", data: data, fileData: "Leads" });
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
