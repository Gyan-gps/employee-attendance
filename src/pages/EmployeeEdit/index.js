import React, { useEffect, useState } from 'react'
import TopNavbar from '../../components/TopNavbar'
import { useParams } from 'react-router-dom';

export default function EmployeeEdit() {
    const [EmployeeDetails, setEmployeeDetails] = useState({});

    const {userName} = useParams();

    // console.log("sdfghjklkbhvbjk",userName)

    useEffect(()=>{
        if(!userName){
            return;
        }
        getEmployeeData(userName);
    },[userName])

    const getEmployeeData = (userName)=>{
        let EmployeesList = JSON.parse(localStorage.getItem("employees"))
        let employee = EmployeesList.find((prev)=> prev.userName === userName);
        setEmployeeDetails({...employee});
        console.log("sdfghjklkbhvbjk",employee)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setEmployeeDetails({...EmployeeDetails, [name]: value});
    }

    const handleEditEmployee = ()=>{
        let EmployeesList = JSON.parse(localStorage.getItem("employees"));
        const newList = EmployeesList.map((prev)=> prev.userName === userName ? EmployeeDetails : prev);

        localStorage.setItem("employees", JSON.stringify(newList));
        alert("Data updated Successfully")

    }

    return (
        <div>
            <TopNavbar />
            <div className='employee-form'>
                <div className='input-div'>
                    <label htmlFor='name' >Employee Name</label>
                    <input id="name" type='text' name='name' value={EmployeeDetails.name} onChange={handleChange} placeholder='Please Enter Employee Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='userName'>Employee UserName</label>
                    <input id='userName' type='text' name='userName' value={EmployeeDetails.userName} onChange={handleChange} placeholder='Please Enter Employee User Name' disabled />
                </div>
                <div className='input-div'>
                    <label htmlFor='password'>password</label>
                    <input id='password' type='text' name='password' value={EmployeeDetails.password} onChange={handleChange} placeholder='Please Enter Employee User Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='age'>Age</label>
                    <input id='age' type='number' name='age' value={EmployeeDetails.age} onChange={handleChange} placeholder='Please Enter Employee Age' />
                </div>
                <div className='input-div'>
                    <label htmlFor='fatherName'>Father Name</label>
                    <input id='fatherName' type='text' name='fatherName' value={EmployeeDetails.fatherName} onChange={handleChange} placeholder='Please Enter Emplyee Father Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='doj'>Date of Joining</label>
                    <input id='doj' type='date' name='doj' value={EmployeeDetails.doj} onChange={handleChange} placeholder='Please Enter Joining' />
                </div>
                <div className='input-div'>
                    <label htmlFor='workingLocation'>Working location</label>
                    <input id='workingLocation' type='text' name='workingLocation' value={EmployeeDetails.workingLocation} onChange={handleChange} placeholder='Please Enter Working Location' />
                </div>
                <div>
                    <button onClick={handleEditEmployee}>Edit Employee</button>
                </div>
            </div>
        </div>
    )
}