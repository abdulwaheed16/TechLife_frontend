// import { transporter, mailOptions } from "@/config/nodemailer";
import nodemailer from "nodemailer";
import xlsx from "xlsx";
// import { users as data } from "@/mock/mock-data";
import { Leads } from "@/utils/leads";
import { email_template } from "@/utils/Email-Template";
import chalk from "chalk";
import { get_clients_details } from "@/utils/clients-google-sheet";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;

    // ----------------------------------------------------
    console.log("CONTACT DATA: ", chalk.green(data));
    try {
      // const sheetTitle = await get_clients_details();
      // const ServiceAccountAuth = new JWT({
      //   email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      //   key: process.env.GOOGLE_PRIVATE_KEY,
      //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      // });

      // const doc = new GoogleSpreadsheet(
      //   process.env.SPREADSHEET_ID,
      //   ServiceAccountAuth
      // );

      // await doc.loadInfo();

      // const clients_sheet = doc.sheetsByTitle["Clients"];

      // ----------------------Send email-------------------//
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "abwaheed.ahmed@gmail.com",
          pass: "heqrqapfwacnuleg",
        },
      });
      const mailOptions = {
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

      try {
        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
        res.status(200).send({
          message: "Sent Mail successfully",
          data: data,
          // sheet_title: doc?.title,
          // sheetPageName: clients_sheet,
        });
      } catch (error) {
        // If the email fails to send, log the error and send a response to the client.
        console.log(error);
        res.status(500).send("Something went wrong while sending the email.");

        // Uncomment the following lines to troubleshoot the error.
        // console.log(mailOptions);
        // console.log(transportor);
      }
      // ------------------------------------------------
    } catch (error) {
      res.status(500).send({
        message: "Failed to record information, please try to resend",
      });
    }
  } else {
    res.status(400).json({ message: "bad request" });
  }
}
