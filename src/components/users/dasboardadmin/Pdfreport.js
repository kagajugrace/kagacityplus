import React,{useState} from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";
import '../../../css/tailwindcss.css';
// define a generatePDF function that accepts a students argument
const Pdfreport = items => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Firstname", "Lastname", "Gender", "Email","Phone"];
  // define an empty array of rows
  const tableRows = [];
  const [data, setData] = useState([]);
  {data.map((item,key)=>{

    return(
  // for each student pass all its data into an array
  items.forEach(item=>{
    const itemData = [
      item.id,
      item.firstname,
      item.lastname,
      item.email,
      item.gender,
      item.phone,
      // called date-fns to format the date on the student
      format(new Date(item.updated_at), "yyyy-MM-dd")
    ];
    
    tableRows.push(itemData);
  })
  
  )
}
)}

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // student title. and margin-top + margin-left
  doc.text("Closed students within everyday", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default Pdfreport;