import './footer.css';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer(){

    return(
        <footer>
                <p>Job<span>Search</span>.</p>
                <div className="footerlinks">
                     <a href="https://github.com" target="_blank">
                     <FaGithub />
                    </a>

                    <a href="https://facebook.com" target="_blank">
                     <FaFacebook />
                     </a>

                    <a href="https://instagram.com" target="_blank">
                     <FaInstagram />
                    </a>

                    <a href="https://linkedin.com" target="_blank">
                    <FaLinkedin />
                    </a>
                </div>
        </footer>
    )

}

export default Footer