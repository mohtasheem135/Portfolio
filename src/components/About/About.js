import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./about.css";
import profile1 from "./Images/profile-2.jpg";

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <br />
      <div className='about-container'>
        <div className='about-head-text'>
          <h2>About me</h2>
        </div>
        <div className='about-profile'>
          <div className='profile-img-container'>
            <img src={profile1} className="profile-img" />
          </div>
          <div className='about-text'>
            <p className='about-text-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu magna tristique, lacinia tellus sed, blandit dolor. Nulla sem augue,
              varius sed purus in, porttitor bibendum diam. Nulla gravida auctor justo,
              id pulvinar augue vulputate in. Vivamus eu nisi faucibus,
              gravida neque non, suscipit quam. Morbi in tempus metus, eu accumsan metus.
              Fusce et nibh condimentum, maximus magna non, iaculis erat. Integer vulputate viverra leo,
              ut lobortis dui commodo vitae. Vestibulum vel arcu et diam suscipit feugiat id quis est.
              Fusce malesuada tristique diam, sed fringilla augue sagittis nec. Nam eget euismod nulla,
              at suscipit lacus.
            </p>
            <div className='about-experience'>
              <h3>Previous Experiences</h3>
            </div>
            <div className='about-experience-list'>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu magna tristique, lacinia tellus sed, blandit dolor.</li>
              <p className='about-experience-list-para'>blandit dolor</p>
              <p className='about-experience-list-para'>20xx - 20xx</p>
                
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu magna tristique, lacinia tellus sed, blandit dolor.</li>
              <p className='about-experience-list-para'>blandit dolor</p>
              <p className='about-experience-list-para'>20xx - 20xx</p>
                
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Etiam eu magna tristique, lacinia tellus sed, blandit dolor.</li>
              <p className='about-experience-list-para'>blandit dolor</p>
              <p className='about-experience-list-para'>20xx - 20xx</p>
                
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About