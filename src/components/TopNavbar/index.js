import "./index.css"
import React from 'react'

export default function TopNavbar() {

    let user = JSON.parse(localStorage.getItem("cred"));

    const handleLogout = ()=>{
        localStorage.setItem("cred","");
    }

    return (
        <div className="navbar">
            <a href='attendance'>Logo</a>
            <a href='attendance'>Attendance</a>
            <a href='employee-details'>Details</a>
            {
                user.type == "manager" && <a href="/employees">Employees</a>
            }
            <a href='contact-us'>Contact Us</a>
            {
                user.type == "manager" && <a href='create-employee'>Create Employee</a>
            }
            <a href='/' onClick={handleLogout}>Logout</a>
        </div>
    )
}