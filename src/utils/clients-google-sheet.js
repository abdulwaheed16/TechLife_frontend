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
export const get_clients_details = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SPREADSHEET_CLIENT_EMAIL,
      private_key: process.env.SPREADSHEET_PRIVATE_KEY,
    });

    await doc.loadInfo();
    let sheet = doc.sheetsByIndex[0];
    const rows = sheet.getRows();
    console.log("Rows: ", rows);
    return rows;
  } catch (error) {
    console.log("SpreadSheet Authorization Failed Error: ", error);
  }
};
export const clear_clients_details = () => {};
