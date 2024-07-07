import "./index.css"
import React from 'react'

export default function TopNavbar() {
    return (
        <div className="navbar">
            <a href='attendance'>Logo</a>
            <a href='attendance'>Attendance</a>
            <a href='employee-details'>Details</a>
            <a href='contact-us'>Contact Us</a>
            <a href='login/logout'>Logout</a>
        </div>
    )
}