import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

export const add_clients_details = async (data) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
      private_key: process.env.SPREADSHEET_PRIVATE_KEY,
    });

    await doc.loadInfo();
    let sheet = doc.sheetsByIndex[0];
  } catch (error) {
    console.log("SpreadSheet Authorization Fialed Error: ", error);
  }
};

// ----------------Get clients data-------------------------//

export const get_clients_details = async () => {
  try {
    const ServiceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.SPREADSHEET_ID,
      ServiceAccountAuth
    );

    await doc.loadInfo();
    const clients_sheet = doc.sheetsByTitle("Clients");
    const title = doc.title;
    return title;
    // await clients_sheet.setHeaderRow()
  } catch (error) {
    console.log("SpreadSheet Authorization Failed Error: ", error);
  }
};
export const clear_clients_details = () => {};
