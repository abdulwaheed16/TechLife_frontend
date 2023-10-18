import { transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";
import xlsx from "xlsx";
// import { users as data } from "@/mock/mock-data";
import { Leads } from "@/utils/leads";
import { email_template } from "@/utils/Email-Template";
import chalk from "chalk";
import { get_clients_details } from "@/utils/clients-google-sheet";
import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    console.log("CONTACT DATA: ", chalk.green(data));
    // const filedata = Leads()
    // const client_details = await get_clients_details();
    let client_details = "";
    const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);
    try {
      await doc.useServiceAccountAuth({
        client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
        private_key: process.env.SPREADSHEET_PRIVATE_KEY,
      });

      await doc.loadInfo();
      let sheet = doc.sheetsByIndex[0];
      await sheet.addRows({
        Name: "Asad",
        Email: "asad@gmail.com",
        Phone: "1231231234",
        Packages: "testing packages",
        ReferralCode: "121-342",
      });
      const rows = await sheet.getRows();
      console.log("Rows: ", rows);
      client_details = rows;
      return rows;
    } catch (error) {
      console.log("SpreadSheet Authorization Failed Error: ", error);
    }

    const mailOptions = {
      from: data.email,
      // to: "sikandarhashmi96@gmail.com",
      to: "awaheed.ahmad@gmail.com",
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

    // Try sending the email.
    try {
      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);
      res.status(200).send({
        message: "Sent Mail successfully",
        data: data,
        clientDetals: client_details,
      });
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
