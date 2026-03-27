import { IoSearch, IoLocationOutline } from "react-icons/io5";
import './review.css';

import google from "./assets/pics/google.webp";
import microsoft from "./assets/pics/microsoft.png";
import amazon from "./assets/pics/amazon.png";
import apple from "./assets/pics/apple.png";
import meta from "./assets/pics/meta.png";
import netflix from "./assets/pics/netflix.png";
import tesla from "./assets/pics/tesla.png";
import iba from "./assets/pics/iba.png";
import oracle from "./assets/pics/oracle.png";


const companies = [
  {
    name: "Google",
    logo: google,
    rating: 4.5,
    reviews: 1200,
    salaries: 800,
    jobs: 50,
  },
    {
    name: "Microsoft",
    logo: microsoft,
    rating: 4.4,
    reviews: 1000,
    salaries: 700,
    jobs: 40,
  },
  {
    name: "Amazon",
    logo: amazon,
    rating: 4.2,
    reviews: 1500,
    salaries: 900,
    jobs: 70,
  },
   {
    name: "Meta",
    logo: meta,
    rating: 4.1,
    reviews: 900,
    salaries: 600,
    jobs: 30,
  },
  {
    name: "Netflix",
     logo: netflix,
    rating: 4.3,
    reviews: 800,
    salaries: 500,
    jobs: 25,
  },
   {
    name: "Tesla",
    logo: tesla,
    rating: 4.0,
    reviews: 700,
    salaries: 400,
    jobs: 20,
  },
  {
    name: "Apple",
    logo: apple,
    rating: 4.6,
    reviews: 2000,
    salaries: 1200,
    jobs: 80,
  },
   {
    name: "IBM",
    logo: iba,
    rating: 3.9,
    reviews: 600,
    salaries: 300,
    jobs: 15,
  },
  {
    name: "Oracle",
    logo: oracle,
    rating: 4.0,
    reviews: 500,
    salaries: 350,
    jobs: 18,
  },
];



function Review(){
    return(
        <div className="review-container">
            {/* searchbox */}
            <div className="r-hero-section">
                <h1>Find great places to work</h1>
                <h2>Get access to millions of company reviews</h2>
                <h4>Company name or job title</h4>
                <div className="review-searchbox">
                    <div className="review-input">
                            <IoSearch className="icon" />
                        <input type="search" placeholder=""></input>
                    </div>
                    <button className="review-button">Find Companies</button>
                </div>
                <a href="#" className="reviewlink">Do you want to search for a company ?</a>
            </div>

            {/* ratingbox */}

            <div className="rate-container">
                <h2>Popular Companies</h2>
                <div className="company-container">
                    {companies.map((item,index)=>(
                        <div className="company-card" key={index}>
                            <img src={item.logo} alt={item.name}></img>
                            <h3>{item.name}</h3>

                            <p className="rating">
                                ⭐ {item.rating}
                            </p>

                            <div className="company-info">
                                <p>{item.reviews}Reviews</p>
                                <p>{item.salaries}salaries</p>
                                <p>{item.jobs}job</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}


export default Review