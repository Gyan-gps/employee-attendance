import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function LoginPage() {
    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        password: ""
    })

    const user = localStorage.getItem("cred");

    useEffect(() => {
        if (user) {
            router("/attendance");
        }
    }, [user]);

    const router = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value })
    }
    const handleLogin = () => {
        console.log("sdfghjklkbhvbjk",loginDetails)
        if (!loginDetails.userName || !loginDetails.password || !loginDetails.type) return;
        localStorage.setItem("cred", JSON.stringify(loginDetails))
        router("/attendance");
    }
    return (
        <div>
            <select name="type" onChange={handleChange}>
                <option value="">Select type</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
            </select>
            <input type='text' name='userName' value={loginDetails.userName} onChange={handleChange} />
            <input type="password" name="password" value={loginDetails.password} onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}
export default LoginPage