import React, { useState } from 'react'
import './index.css'
import TopNavbar from '../../components/TopNavbar';

export default function CreateEmployee() {
    const [EmployeeDetails, setEmployeeDetails] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeDetails({ ...EmployeeDetails, [name]: value });
    }

    const handleCreateEmployee = () => {

        console.log("sdfghjklkbhvbjk", EmployeeDetails);
        let prev = JSON.parse(localStorage.getItem("employees"));
        prev = prev ? prev : [];
        localStorage.setItem("employees", JSON.stringify([...prev, EmployeeDetails]))
        alert("Employee Created Successfully")
    }

    return (
        <div>
            <TopNavbar/>
            <div className='employee-form'>
                <div className='input-div'>
                    <label htmlFor='name' >Employee Name*</label>
                    <input id="name" type='text' name='name' value={EmployeeDetails.name} onChange={handleChange} placeholder='Please Enter Employee Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='userName'>Employee UserName*</label>
                    <input id='userName' type='text' name='userName' value={EmployeeDetails.userName} onChange={handleChange} placeholder='Please Enter Employee User Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='password'>password*</label>
                    <input id='password' type='text' name='password' value={EmployeeDetails.password} onChange={handleChange} placeholder='Please Enter Employee User Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='age'>Age*</label>
                    <input id='age' type='number' name='age' value={EmployeeDetails.age} onChange={handleChange} placeholder='Please Enter Employee Age' />
                </div>
                <div className='input-div'>
                    <label htmlFor='fatherName'>Father Name*</label>
                    <input id='fatherName' type='text' name='fatherName' value={EmployeeDetails.fatherName} onChange={handleChange} placeholder='Please Enter Emplyee Father Name' />
                </div>
                <div className='input-div'>
                    <label htmlFor='doj'>Date of Joining*</label>
                    <input id='doj' type='date' name='doj' value={EmployeeDetails.doj} onChange={handleChange} placeholder='Please Enter Joining' />
                </div>
                <div className='input-div'>
                    <label htmlFor='workingLocation'>Working location*</label>
                    <input id='workingLocation' type='text' name='workingLocation' value={EmployeeDetails.workingLocation} onChange={handleChange} placeholder='Please Enter Working Location' />
                </div>
                <div>
                    <button onClick={handleCreateEmployee} disabled={
                        !EmployeeDetails.name || !EmployeeDetails.userName || !EmployeeDetails.password || !EmployeeDetails.age ||
                        !EmployeeDetails.fatherName || !EmployeeDetails.doj || !EmployeeDetails.workingLocation
                    } >Create Employee</button>
                </div>
            </div>
        </div>
    )
}
