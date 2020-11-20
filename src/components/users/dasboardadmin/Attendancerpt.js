import React,{Component,useState,useEffect} from 'react'; 
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../../css/tailwindcss.css';
const Attendancerpt = ({ Students }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the Student
  // const assignColorToStudentStatus = Student => {
  //   if (Student.firstname!== null && Student.firstname !== '') {
  //     return "p-3 mb-2 bg-success text-white";
  //   } else if (Student.firstname === ' ') {
  //     return "p-3 mb-2 bg-warning text-dark";
  //   } else if (Student.firstname === null) {
  //     return "p-3 mb-2 bg-light text-dark";
  //   }
  // };
  const [data, setData] = useState([]);

  useEffect( ()=>{
      // async await
     const response = axios.get('http://127.0.0.1:8000/student-attendance/')
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
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item,key)=>{

       return(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                {/* <td className={assignColorToStudentStatus(item)}>
                  {item.status}
                </td> */}
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
  );
};

export default Attendancerpt;
