import "./index.css"
import React from 'react'

export default function TopNavbar() {

    const handleLogout = ()=>{
        localStorage.setItem("cred","");
    }

    return (
        <div className="navbar">
            <a href='attendance'>Logo</a>
            <a href='attendance'>Attendance</a>
            <a href='employee-details'>Details</a>
            <a href='contact-us'>Contact Us</a>
            <a href='create-employee'>Create Employee</a>
            <a href='/' onClick={handleLogout}>Logout</a>
        </div>
    )
}