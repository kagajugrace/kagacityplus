import React,{Component,useState,useEffect} from 'react'; 
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../../css/tailwindcss.css';
const Attendancerpt = ({ Students }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the Student
const assignColorToItemStatus = item=> {
  if (item.option === 'yes' ) {
    return "p-3 mb-2 bg-success text-white";
  } else if (item.option === 'no') {
    return "p-3 mb-2 bg-warning text-dark";
  } else if (item.option ==='' ) {
    return "p-3 mb-2 bg-light text-dark";
  }
};
  const [data, setData] = useState([]);

  useEffect( ()=>{
      // async await
     const response = axios.get('http://127.0.0.1:8000/attendance-page/')
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
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Telephone</th>
              <th scope="col">Date</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item,key)=>{

       return(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.date}</td>
                <td>{item.telephone}</td>
                <td>{item.option}</td>
                <td className={assignColorToItemStatus(item)}>
                  {item.status}
                </td>
                <td>
                  <Link to={`/Student/${item.firstname}`}>See comments</Link>
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
    // my stuff

 


  );
};

export default Attendancerpt;
