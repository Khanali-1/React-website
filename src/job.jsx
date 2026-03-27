import "./job.css";
import work from './assets/pics/work.avif';
import google from './assets/pics/google.webp';
import microsoft from './assets/pics/microsoft.png';
import apple from './assets/pics/apple.png';


function Job(){
    return(
        <div className="job-container">
            <div className="pic-container">
                <div className="text">
                    <i><h1>Let's make your next great hire. Fast.</h1></i>
                      <button>Post a job</button>
                </div>
                <div className="picture">
                <img src={work}></img>
                </div>
            </div>

            <div className="job-grid">
                <div className="job-box">
                    <span>1</span>
                    <h1>Create Your Account.</h1>
                    <p>free account All you need is your email address to create an account and start building your job post.</p>
                </div>
                  <div className="job-box">
                    <span>2</span>
                    <h1>Build your job post</h1>
                    <p>Then just add a title, description, and location to your job post, and you're ready to go.</p>
                </div>
                  <div className="job-box">
                    <span>3</span>
                    <h1>Post your job</h1>
                    <p>.After you post your job use our state of the art tools to help you find dream talent.</p>
                </div>
            </div>

            <div className="container-3">
                <h1>Save time and effort in your hiring journey.</h1>
                <p>Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</p>
            </div>

            <div className="container-4">
                <h2>You're in good company.</h2>
                <p>Over 3,300,000 companies use Indeed to hire. See why these amazing companies use us as their platform to hire dream talent.</p>
                <div className="grid-4">
                    <div className="box4">
                        <img src={google}></img>
                        <p>Google, Microsoft aur Meta duniya ki bari technology companies hain jo internet, software aur digital services provide karti hain. Google apne search engine ke liye famous hai, Microsoft Windows aur software banata hai, jabke Meta social media platforms jaise Facebook aur Instagram chalati hai.</p>
                    </div>
                      <div className="box4">
                        <img src={microsoft}></img>
                        <p>Microsoft ek bari technology company hai jo software aur operating systems banati hai. Yeh Windows, MS Office aur cloud services ke liye mashhoor hai aur duniya bhar mein use hoti hai.</p>
                    </div>
                      <div className="box4">
                        <img src={apple}></img>
                        <p>Apple ek mashhoor technology company hai jo iPhone, Mac aur iPad jese products banati hai. Yeh apne design, quality aur innovation ke liye duniya bhar mein famous hai.</p>
                    </div>
                </div>
            </div>
                <div className="container5">
                    <div className="left5">
                        <h2>We're here to help</h2>
                        <p>Visit our Help Center for answers to common questions or contact us directly.</p>
                        <div className="btn-box">
                            <button>help center</button>
                            <button>job center</button>
                        </div>
                    </div>
                     <div className="right5">
                            <h2>Job<span>Search</span>.</h2>
                            <div className="links">
                                <a href="#">About job</a>
                                <a href="#">press</a>
                                <a href="#">Security</a>
                                <a href="#">terms</a>
                                <a href="#">Privicy center</a>
                                <a href="#">Countries</a>
                                <a href="#">siteMap</a>

                            </div>
                        </div>
                </div>
            </div>   
    )
}

export default Job