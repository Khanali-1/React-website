import { useState } from "react";

import {NavLink} from "react-router-dom"; 

import './sign.css';
import { PiSquareHalfBottomLight } from "react-icons/pi";


function Sign (){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [eror,setEror]=useState("");

    const submit= (e)=>{
        e.preventDefault();// page reload rokne ka lya 

        if(!email || !password){
            setEror("all feilds are required");
            return;
        }

        if(password.length < 8){
            setEror("password must be atleast 8 character long");
            return;
        }

        // clear eror 

        setEror("");

        console.log("Email :",email);
        console.log("Password:",password)


        alert(" sign in successfully");

    }
    return(
        <div className="container">
            <div className="form-container">

            <h1 className="loggo">Job<span>Saerch</span>.</h1>
            <h2>Ready to take the next step?</h2>
            <p>Create an account or sign in.</p>
            <form onSubmit={submit}>
                <h2>Sign in</h2>
                <input   type="email"placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input   type="password"placeholder="password"value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit" className="button">Login</button>
                <p>don't have an Account?<NavLink to="/signup">Signup</NavLink></p>
                 {eror && <p className="eror">{eror}</p>}
            </form>
            </div>

        </div>

    )
}

export default Sign



















