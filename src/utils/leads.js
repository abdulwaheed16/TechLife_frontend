import XLSX from "xlsx";
import fs from "fs";

export const Leads = () => {
  const workbook = XLSX.readFile("../data/attachments/leads.xlsx");

  let worksheets = {};
  for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetName]
    );
  }
  worksheets.Sheet1.push("This content is added later");
  return JSON.stringify(worksheets.Sheet1);
};
