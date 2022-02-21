import React from 'react';
import "./project.css";
import project1 from "./Images/project-1.jpg"
import project2 from "./Images/project-3.jpg"
import Footer from '../Footer/Footer';

const Projects = () => {
  return (
    <div>
      <div className='project-head-container'>
        <h1 className='project-head-text'>Projects</h1>
      </div>
      <div className='project-list-container'>

        {/* Project - 1 */}

        <div className='project-list'>
          <div className='project-img-container'>
            <img className='project-img' src={project1} />
          </div>
          <div className='project-details'>
            <h2 className='project-name-head'>Sararthi</h2>
            <p className='project-details-para'>
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


            <hr />
            <p className='project-details-languages'><b>Languages :</b> HTML, CSS, ReactJs, Firebase</p>
            <p className='project-details-date'><b>Date Stamp :</b> 12th November, 2021 - 24th January, 2022</p>
            <div className='project-view-link'>
              <p className='project-details-view-link'><b><a href='#' >View on GitHub</a></b></p>
              <p className='project-details-view-link'><b><a href='#' >Deploy</a></b></p>
            </div>
          </div>
        </div>
        <hr />

        {/* Project-2 */}

        <div className='project-list'>
          <div className='project-details'>
            <h2 className='project-name-head'>Sararthi</h2>
            <p className='project-details-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
              lacinia tellus sed, blandit dolor. Nulla sem augue, varius sed purus in,
              porttitor bibendum diam. Nulla gravida auctor justo, id pulvinar augue vulputate in.
              Vivamus eu nisi faucibus, gravida neque non, suscipit quam.
            </p>
            <ul className='project-details-ul'>
              <li className='project-details-lists'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
                lacinia tellus sed,
              </li>
              <li className="project-details-lists">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
                lacinia tellus sed,
              </li>
            </ul>
            <hr />
            <p className='project-details-languages'><b>Languages :</b> HTML, CSS, ReactJs, Firebase</p>
            <p className='project-details-date'><b>Date Stamp :</b> 12th November, 2021 - 24th January, 2022</p>
            <div className='project-view-link'>
              <p className='project-details-view-link'><b><a href='#' >View on GitHub</a></b></p>
              <p className='project-details-view-link'><b><a href='#' >Deploy</a></b></p>
            </div>
          </div>
          <div className='project-img-container project-img-container-1'>
            <img className='project-img' src={project1} />
          </div>
        </div>
        <hr />

        {/* Project - 3 */}

        <div className='project-list'>
          <div className='project-img-container project-img-container-1'>
            <img className='project-img' src={project1} />
          </div>
          <div className='project-details'>
            <h2 className='project-name-head'>Sararthi</h2>
            <p className='project-details-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
              lacinia tellus sed, blandit dolor. Nulla sem augue, varius sed purus in,
              porttitor bibendum diam. Nulla gravida auctor justo, id pulvinar augue vulputate in.
              Vivamus eu nisi faucibus, gravida neque non, suscipit quam.
            </p>
            <ul className='project-details-ul'>
              <li className='project-details-lists'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
              lacinia tellus sed.
              </li>
              <li className="project-details-lists">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu magna tristique,
              lacinia tellus sed.
              </li>
            </ul>
            <hr />
            <p className='project-details-languages'><b>Languages :</b> HTML, CSS, ReactJs, Firebase</p>
            <p className='project-details-date'><b>Date Stamp :</b> 12th November, 2021 - 24th January, 2022</p>
            <div className='project-view-link'>
              <p className='project-details-view-link'><b><a href='#' >View on GitHub</a></b></p>
              <p className='project-details-view-link'><b><a href='#' >Deploy</a></b></p>
            </div>
          </div>
        </div>
        <hr />

        {/* Project - 4 */}


      </div>
      {/* <hr/> */}
      <Footer />
    </div>
  )
}

export default Projects