import './signup.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup (){


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [error,setError] = useState("");


    const navigate = useNavigate();// it will take u back to home page "/";

    const submit = (e)=>{
        e.preventDefault();

        if(!name || !email || !password || !confirmpassword){
            setError("All fields are required");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if(password !== confirmpassword){
            setError("Passwords do not match");
            return;
        }

        setError("");

        console.log('name:', name);
        console.log('email:', email);
        console.log('password:', password);
        console.log('confirm password:', confirmpassword);

        alert("Account created successfully 🎉");

        //login success after
        navigate("/");
    }

    return(
        <div className="container">
            <form onSubmit={submit}>
                <h2>Sign Up</h2>

                <input 
                  type="text"
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />

                <input  
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                <input  
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />

                <input  
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmpassword}
                  onChange={(e)=>setConfirmpassword(e.target.value)}
                />

                <button type="submit" className="button">Create Account</button>

                <p>
                  already have an Account?
                  <NavLink to="/sign"> SignIn</NavLink>
                </p>

                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Signup;