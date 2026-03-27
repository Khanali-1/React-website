import { IoSearch, IoLocationOutline } from "react-icons/io5";
import  './home.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Card from './card.jsx';
import './card.css';


function Home(){

    const [jobtitle,setJobtitle] = useState([]);
    const [jobdisplay,setJobdisplay] =useState("");
    const [country,setCountry] = useState("gb");

    const [selectedJob,setSelectedJob]= useState([]);
    const [issearched,setIssearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const APP_ID = "b41b670f";
    const APP_KEY = "b6c75523c80e7e965e71ecf578764376";



     // 🔍 SEARCH FUNCTION (PROFESSIONAL)
    const Search = async()=>{

        setLoading(true);

        try{

        const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=b41b670f&app_key=b6c75523c80e7e965e71ecf578764376`;

        const response = await axios.get(url);

        console.log(response.data.results);
        setJobtitle(response.data.results);
        setIssearched(true)
        }
         catch (err) {
            console.error(err);
            setError("Failed to fetch jobs. Please try again.");
        } finally {
            setLoading(false);
        }
        
    };


    return(
        <div className="home">
            <div className="search-wrapper">
                <div className="searchbox">
                      <div className="input">
                          <IoSearch className="icon" />
                          <input type="search" placeholder="Job title, keywords, or company"></input>
                    </div>
                    <div className="divider"></div>
                    <select className="country" onChange={(e)=>setCountry(e.target.value)}>
                          <option value="fr">France</option>
                          <option value="es">Spain</option>
                          <option value="gb">UK</option>
                          <option value="us">USA</option>
                    </select>
                    <div className="input">
                        <IoLocationOutline className="icon" />
                        <input type="search" placeholder="City, state, or zip code"></input>
                    </div>
                      <select className="countrybar" onChange={(e)=>setCountry(e.target.value)}>
                          <option value="fr">France</option>
                          <option value="es">Spain</option>
                          <option value="gb">UK</option>
                          <option value="us">USA</option>
                   
                    </select>
                    <button onClick={Search}>Find Jobs</button>
                </div>
            </div>
               {/* CARD SECTION */}
            {issearched && (
                <div className="card-container">

                    <div className="left">
                        {jobtitle.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>

                </div>
            )}

       
            <div className="hero-section">
                <div className="hero-container">
                 <h1 className="loggo">Job<span>Search</span>.</h1>

                <h2>Your next job starts here</h2>

                <p>
                Create an account or sign in to see your personalised job
                recommendations.
               </p>

               <NavLink className="start-btn" to="sign">
               Get Started →
               </NavLink>
               </div>
               </div>

        </div>
    
    )
}


export default Home