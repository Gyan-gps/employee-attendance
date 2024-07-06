import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        password: ""
    })

    const router = useNavigate();
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]: value})
    }

    const handleLogin = ()=>{

        if(!loginDetails.userName || !loginDetails.password) return;

        localStorage.setItem("cred",JSON.stringify(loginDetails))
        router("/attendance");
    }

  return (
    <div>
        <input type='text' name='userName' value={loginDetails.userName}  onChange={handleChange} />
        <input type='password' name='password' value={loginDetails.password}  onChange={handleChange} />

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
