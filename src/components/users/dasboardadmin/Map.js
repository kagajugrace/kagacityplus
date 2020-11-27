import React,{Component,useState,useEffect} from 'react'; 
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../../css/tailwindcss.css';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";
const StudentsComponent = ({ items }) => {
// const [items, setItems] = useState([]);
// a function that assigns bootstrap styling classes based on 
// the status of the Student
  const assignColorToItemStatus = item=> {
    if (item.firstname!== null && item.firstname !== '') {
      return "p-3 mb-2 bg-success text-white";
    } else if (item.firstname === ' ') {
      return "p-3 mb-2 bg-warning text-dark";
    } else if (item.firstname === null) {
      return "p-3 mb-2 bg-light text-dark";
    }
  };
  const doc = new jsPDF();
  const [data, setData] = useState([]);
  const tableRows = [];
  const tableColumn = ["Id", "Firstname", "Lastname", "Gender", "Email","Phone"];
  useEffect( ()=>{
      // async await
     const response = axios.get('http://127.0.0.1:8000/student-creation/')
    //  print(response);
     .then(res=>{
       setData(res.data);
       console.log(res)
     })
     .catch((err)=>{
       console.log(err)
     })
   },[]
 
   );
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
   // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
   // student title. and margin-top + margin-left
  doc.text("Closed students within everyday", 14, 15);
   // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
  
  return (
    <div className="container">
      {/* {items.length === 0 ? (
        "You currently have no Students created"
      ) : ( */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody> 
      {data.map((item,key)=>{
      // format(new Date(),'yyyy-MM-dd')
      const itemData = [
        item.id,
        item.firstname,
        item.lastname,
        item.email,
        item.gender,
        item.phone,
        // called date-fns to format the date on the student
        format(new Date(), "yyyy-MM-dd")
      ];
      tableRows.push(itemData)
       return(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                
                <td 
                className={assignColorToItemStatus(item)}>
                  {item.status}
                </td>
                <td>
                  <Link to={`/Student/${item.firstname}`}>See comments</Link>
                </td>
              </tr>
           
        )
      
   
    }
     )
 }

    
            {/* // {Students.map(Student => (
            //   <tr key={Student.id}>
            //     <td>{Student.id}</td>
            //     <td>{Student.firstname}</td>
            //     <td>{Student.lastname}</td>
            //     <td>{Student.gender}</td>
            //     <td>{Student.email}</td>
            //     <td>{Student.telephone}</td>
            //     <td className={assignColorToStudentStatus(Student)}>
            //       {Student.status}
            //     </td>
            //     <td>
            //       <Link to={`/Student/${Student.code}`}>See comments</Link>
            //     </td>
            //   </tr>
            // ))} */}
          </tbody>
        </table>
       {/* )}  */}
       
    </div>
 
  );
 
  
};

export default StudentsComponent;
