import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from  '../configure/firebase'

function ForgotPass(){

    const [email, setEmail] = useState('');

    let history = useNavigate();

    const forgotPass = (()=>{

        sendPasswordResetEmail(auth, email).then(()=>{
            history("/");
        }).catch(()=>{
            console.log('Enter the correct email');
        })

        
    })
    return(
        <div className="container">

            <h1>Forgot Password</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={forgotPass}>Reset Password</button><br></br>

            <span>Don't have an account? </span> <span>
                <Link to="/signup">Create an account here</Link>
                
            </span>
        </div>
    )
}

export default ForgotPass