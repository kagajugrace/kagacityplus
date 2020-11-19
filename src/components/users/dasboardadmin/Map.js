import React from "react";
import { Link } from "react-router-dom";
import '../../../css/tailwindcss.css';
const StudentsComponent = ({ Students }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the Student
  const assignColorToStudentStatus = Student => {
    if (Student.firstname!== null && Student.firstname !== '') {
      return "p-3 mb-2 bg-success text-white";
    } else if (Student.firstname === ' ') {
      return "p-3 mb-2 bg-warning text-dark";
    } else if (Student.firstname === null) {
      return "p-3 mb-2 bg-light text-dark";
    }
  };
  return (
    <div className="container">
      {Students.length === 0 ? (
        "You currently have no Students created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstname</th>
              <th scope="col">lastname</th>
              <th scope="col">gender</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>
            {Students.map(Student => (
              <tr key={Student.id}>
                <td>{Student.id}</td>
                <td>{Student.firstname}</td>
                <td>{Student.lastname}</td>
                <td>{Student.gender}</td>
                <td>{Student.email}</td>
                <td>{Student.phone}</td>
                <td className={assignColorToStudentStatus(Student)}>
                  {Student.status}
                </td>
                <td>
                  <Link to={`/Student/${Student.code}`}>See comments</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsComponent;
