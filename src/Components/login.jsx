import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "../css/login.css"

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useNavigate();
    const login =(()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            // alert("Welcome back")
            history("/home");
        }).catch(()=>{
            console.log("Wrong details");
            alert("Wrong details entered, Please enter the correct details");
        })
    })

    return(
        <div >
           <div className='log-in-container'>

            <h1>Login</h1>

            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="email" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>

            <button style={{width: '150px', height: '30px'}} onClick={login}>Login</button><br></br><br></br>
            <div className="forgot">
            <span>Forgot password? </span>
            <span>
                <Link to="/forgotPass">Click here</Link>
            </span>
            </div>
            <div className="no-account">
            <span>Don't have account? </span>
            <span>
                <Link to="/signup">Sign Up</Link>
            </span>
            </div>
          </div>
        </div>
    )

}

export default Login;