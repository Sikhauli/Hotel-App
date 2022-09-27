import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configure/firebase";
// import Luxury from './luxury'
// import Calender from "./Components/Calender";
// import Luxury from "./luxury";




const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    let history = useNavigate();

    const register = () =>{
        createUserWithEmailAndPassword(auth, email, name, surname, number, password).then(()=>{
            history("/home");
        }).catch((error)=>{
            console.log(error);
            alert("Error!!!");
        })
    }


    return(
        <div>

            <h1>Sign Up</h1>

            <input type="text" placeholder=" Enter Name" onChange={(e)=>setName(e.target.value)} /><br></br>
            <input type="text" placeholder=" Enter Surname" onChange={(e)=>setSurname(e.target.value)} /><br></br>
            <input type="email" placeholder=" Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br></br>
            <input type="number" placeholder=" Enter phone number" onChange={(e)=>setNumber(e.target.value)} /><br></br>
            <input type="password" placeholder=" Create Password" onChange={(e)=>setPassword(e.target.value)} /><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>SIGN UP</button><br></br>

            <span>Already have an account? </span>
            <span>
                <Link to="/">Login</Link>
            </span>
        </div>
     
    )
}

export default SignUp;