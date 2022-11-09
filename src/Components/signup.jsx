import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";
import "../css/signup.css"

const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    let history = useNavigate();

    const register = () =>{
        createUserWithEmailAndPassword(auth, email, name, surname, number, password).then(()=>{
            history("/home", {
                name: name,
                surname: surname
            });
            console.log("name : ", name )
        }).catch((error)=>{
            console.log(error);
            alert("Error!!!");
        })
    }


    return(
        <div>
        <div className="sign-up-container">
            <h1>Sign Up</h1>
       
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} /><br></br>
            <input type="text" placeholder="Surname" onChange={(e)=>setSurname(e.target.value)} /><br></br>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <input type="number" placeholder="Phone Number" onChange={(e)=>setNumber(e.target.value)} /><br></br>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>SIGN UP</button><br></br>

            <span>Already have an account? </span>
            <span>
                <Link to="/">Login</Link>
            </span>
            </div>
        </div>
     
    )
}

export default SignUp;