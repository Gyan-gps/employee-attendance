import React, { useState } from 'react'
import TopNavbar from '../../components/TopNavbar'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function EpmloyeeList() {

    const [employeeList, setEmployeeList] = useState(JSON.parse(localStorage.getItem("employees")));

    const router = useNavigate();

    const handleDelete = (index)=>{
        let newArray = employeeList.filter((prev, i)=> i != index);
        // console.log("sdfghjklkbhvbjk",newArray)
        localStorage.setItem("employees",JSON.stringify(newArray));
        setEmployeeList(newArray);
    }

    const handleUpdate = (userName) =>{
        router('/edit-employee/'+userName);
    }

  return (
    <div className='employee-list'>
        <TopNavbar/>
        <h1>Employee List</h1>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Date of Joining</th>
                    <th>Work Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    !employeeList ? <h1>Did not have any data</h1> :
                    employeeList.length <= 0 ? <h1>Employee list is emplty</h1> :
                    employeeList.map((data,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.fatherName}</td>
                            <td>{data.doj}</td>
                            <td>{data.workingLocation}</td>
                            <td>
                                <button onClick={()=>handleDelete(index)}>Delete</button>
                                <button onClick={()=>handleUpdate(data.userName)}>Update</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
