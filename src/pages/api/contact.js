import { transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";
import { FaBullseye } from "react-icons/fa";
import xlsx from "xlsx";
// import { users as data } from "@/mock/mock-data";
import { Leads } from "@/utils/leads";

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
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Referral Code Email</title>
          <style>
            body {
              font-family: sans-serif;
            }

            .container {
              width: 500px;
              margin: 0 50px;
            }

            .header {
              text-align: center;
            }

            .body {
              padding: 20px;
            }

            .footer {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Referral Code Email</h1>
            </div>

            <div class="body">
              <p>Hi ${data.name},</p>

              <p>Thank you for signing up for our service! Here is your referral code: <code>${data.referralCode}</code></p>

              <p>You can share your referral code with your friends and family, and they will get a discount on their first purchase. You will also get a commission on every sale that you generate.</p>

              <p>To visit our website, please click on the following link: [website link]</p>

              <p>Your user information is as follows:</p>

              <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
              </ul>

              <p>Thank you for being a customer!</p>
            </div>

            <div class="footer">
              <p>Sincerely,</p>
              <p>[Your name]</p>
            </div>
          </div>
        </body>
        </html>
      `,
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
