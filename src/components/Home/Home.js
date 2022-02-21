import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./home.css";
import profileImg1 from "./Images/Profile-1.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import pythonImg from "./Images/python.png";
import vueImg from "./Images/brands.png";
import CImg from "./Images/c-.png";
import cssImg from "./Images/css.png";
import githubImg from "./Images/github.png";
import githubImg1 from "./Images/github.png";
import htmlImg from "./Images/html-5.png";
import javaImg from "./Images/java.png";
import jsImg from "./Images/js.png";
import mysqlImg from "./Images/mysql.png";
import nodejsImg from "./Images/nodejs.png";
import reactImg from "./Images/physics.png";
import vscodeImg from "./Images/visual-studio.png";
import raspberryImg from "./Images/raspberry-pi.png";
import gitLabImg from "./Images/gitlab.png";
import About from '../About/About';
import Projects from '../Projects/Projects';


const Home = () => {



    return (
        <div>
            <Navbar />
            {/* Short Intro */}
            <div className="top-container">
                <div className='top-title'>
                    <h1 className="head-text">Hello, Mohtasheem here 👋</h1>
                    <div className='top-short-intro'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam eu magna tristique, lacinia tellus sed, blandit dolor. Nulla sem augue,
                            varius sed purus in, porttitor bibendum diam. Nulla gravida auctor justo,
                            id pulvinar augue vulputate in. Vivamus eu nisi faucibus,
                            gravida neque non.

                        </p>
                    </div>
                    <div className='social-link-box'>

                        <div className='social-box'>
                            <a href='#'><LinkedInIcon sx={{ fontSize: 45, cursor: 'pointer', ":hover": { color: "#0e76a8", fontSize: 49 } }} /></a>
                        </div>
                        <div className='social-box' data-hover="Hello, this is the tooltip">
                            <a href='#'><GitHubIcon sx={{ fontSize: 45, cursor: 'pointer', ":hover": { color: "black", fontSize: 49 } }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><EmailIcon sx={{ fontSize: 45, cursor: 'pointer', ":hover": { color: " #BB001B", fontSize: 49 } }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><FacebookIcon sx={{ fontSize: 45, cursor: 'pointer', ":hover": { color: "blue", fontSize: 49 } }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><InstagramIcon sx={{ fontSize: 45, cursor: 'pointer', ":hover": { color: "#bc2a8d", fontSize: 49 } }} /></a>
                        </div>
                    </div>
                </div>
                <div className='top-profile-img'>
                    <img src={profileImg1} alt="Profile Image" className='profile-img' />
                </div>
            </div>
            <hr />
            {/* Languages & Tools */}
            <div className='second-container'>
                <div className='second-container-head'>
                    <h2>Languages & Tools</h2>
                    <div className='second-container-text'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam eu magna tristique, lacinia tellus sed, blandit dolor. Nulla sem augue,
                            varius sed purus in, porttitor bibendum diam. Nulla gravida auctor justo,
                            id pulvinar augue vulputate in. Vivamus eu nisi faucibus,
                            gravida neque non, suscipit quam. Morbi in tempus metus, eu accumsan metus.
                            Fusce et nibh.
                        </p>

                        <div className='tool-sets'>
                            <img className='icon-img' src={pythonImg} />
                            <img className='icon-img' src={vueImg} />
                            <img className='icon-img' src={CImg} />
                            <img className='icon-img' src={cssImg} />
                            <img className='icon-img' src={raspberryImg} />
                            <img className='icon-img' src={githubImg1} />
                            <img className='icon-img' src={htmlImg} />
                            <img className='icon-img' src={javaImg} />
                            <img className='icon-img' src={jsImg} />
                            <img className='icon-img' src={mysqlImg} />
                            <img className='icon-img' src={nodejsImg} />
                            <img className='icon-img' src={reactImg} />
                            <img className='icon-img' src={vscodeImg} />
                            <img className='icon-img' src={gitLabImg} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <About />
            <hr />
            <Projects />
        </div>
    )
}

export default Home