import React,{Component,useState,useEffect} from 'react'; 
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../../css/tailwindcss.css';
const Temprpt = ({ Students }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the Student
const assignColorToItemStatus = item=> {
  if (item.temp > '30' && item.temp < '40') {
    return "p-3 mb-2 bg-success text-white";
  } else if (item.temp < '30 ') {
    return "p-3 mb-2 bg-warning text-dark";
  } else if (item.temp >'40') {
    return "p-3 mb-2 bg-light text-dark";
  }
};
  const [data, setData] = useState([]);

  useEffect( ()=>{
      // async await
     const response = axios.get('http://127.0.0.1:8000/student-temperature/')
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
  return (
    <div className="container">
      {/* {Students.length === 0 ? (
        "You currently have no Students created"
      ) : ( */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">temp</th>
              <th scope="col">studentcode</th>
              <th scope="col">donedate</th>
              <th scope="col">donetime</th>
              <th scope="col">telePhone</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item,key)=>{

       return(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.temp}</td>
                <td>{item.studentcode}</td>
                <td>{item.donedate}</td>
                <td>{item.donetime}</td>
                <td>{item.telephone}</td>
                <td className={assignColorToItemStatus(item)}>
                  {item.status}
                </td>
                <td>
                  <Link to={`/Student/${item.studentcode}`}>See comments</Link>
                </td>
              </tr>




        )
    }
    )}

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
      {/* )} */}
    </div>
  );
};

export default Temprpt;
