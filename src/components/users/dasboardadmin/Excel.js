import React, { Component } from 'react' ;
import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 


export class Excel extends Component {  
          
    constructor(props) {  
       super(props)  
        this.state = {  
        ProductData: []  
}
    } 
componentDidMount()
{  
    axios.get("http://127.0.0.1:8000/student-temperature/").then(response => {  
        console.log(response.data);  
        this.setState({  
            ProductData: response.data
          });  
});  
}  

render() 
{  
        return ( 
 <div>
            <table id="emp" class="table">  

                <thead>  
                     <tr>  
                      <th>Id</th>  
                      <th>Temp</th>  
                       <th>studentcode</th>  
                       <th>donedate</th>
                        <th>donetime</th> 
                        <th>Names</th> 
                         {/* <th>Salary</th> 
                         <th>Department</th>   */}
                      </tr>
               </thead> 
             <tbody> 
               {this.state.ProductData.map((p,index) => {  
                    return<tr key={index}>  
                     <td> {p.id}</td> 
                     <td >{p.temp}</td> 
                     <td >{p.studentcode}</td>  
                     <td >{p.donedate}</td>
                     <td >{p.donetime}</td>  
                     <td >{p.names}</td>
                      {/* <td >{p.Salary}</td>   */}
                      <td style={{ paddingRight: "114px" }}>
                      {p.studentcode}</td>  
                    
                    
                    </tr> 
                    
                    })  
                } 
                  </tbody> 
            </table>
<div>  

<ReactHTMLTableToExcel  
    className="btn btn-info"
    table="emp"  
    filename="ReportExcel"  
    sheet="Sheet"  
    buttonText="Export excel" />  
 </div>  
 </div>
 )  
}  
}  

export default Excel
