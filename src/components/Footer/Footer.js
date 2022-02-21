import React from 'react';
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div>
            <div className='Footer-container'>
                <div className='footer-display-box'>
                    <div className='social-box-container-1'>
                        <div className='social-box'>
                            <a href='#'><LinkedInIcon sx={{ marginTop:"12px",color: "white", fontSize: 35, cursor: 'pointer', ":hover": { color: "#0e76a8" } }} /></a>
                        </div>
                        <div className='social-box' data-hover="Hello, this is the tooltip">
                            <a href='#'><GitHubIcon sx={{ marginTop:"12px", color: "white", fontSize: 35, cursor: 'pointer', ":hover": { color: "white"} }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><EmailIcon sx={{ marginTop:"12px", color: "white", fontSize: 35, cursor: 'pointer', ":hover": { color: " #BB001B" } }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><FacebookIcon sx={{ marginTop:"12px", color: "white", fontSize: 35, cursor: 'pointer', ":hover": { color: "blue" } }} /></a>
                        </div>
                        <div className='social-box'>
                            <a href='#'><InstagramIcon sx={{ marginTop:"12px",color: "white", fontSize: 35, cursor: 'pointer', ":hover": { color: "#bc2a8d" } }} /></a>
                        </div>
                        <div className='copyright-tag'>
                            <p className='copyright-tag-text'>2021 &copy; Mohtasheem Ejaz</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer