import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import {useState} from 'react';

import './header.css';



function Header(){


    const [bar,setBar] =useState(false);// false jab pahli bar open render hoga to value false hogi 

    function click(){
        setBar(!bar);/// click hone pe true ho jaega (menu open)
    }

    return(
        <header className='navbar'>
            <div className="logo">Job<span>Search</span>.</div>
            <nav className={bar ?  "mobile-navbar" : "laptop-navbar"}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/review">Company reviews</NavLink>
              <NavLink to="/sign">Sign in</NavLink>
              <NavLink to="/job">Employers/Post Job</NavLink>
            </nav>
        <div className="iconbar" onClick={click}> 
            <FaBars />
        </div>


        </header>
    )

}

export default Header