import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
import { setState } from "react";

// define apdfreport function that accepts a items argument
const pdfreport = items => {
  // initialize jsPDF
  const doc = new jsPDF();
  // const [data, setData] = setState();
  // define the columns we want and their titles
  const tableColumn = ["Id", "Firstname", "Lastname", "Email", "Telephone"];
  // define an empty array of rows
  const tableRows = [];
  const[data,setData]= ('true');
  // for each item pass all its data into an array
  {[data].map((item,key)=>{
    const itemData = [
      item.id,
      item.firstname,
      item.lastname,
      item.email,
      item.telephone,
      // called date-fns to format the date on the item
      format(new Date(item.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(itemData);
  
  
})
};


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // item title. and margin-top + margin-left
  doc.text("Closed items within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default pdfreport;