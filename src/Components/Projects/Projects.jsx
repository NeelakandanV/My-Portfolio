import React from 'react';
import MiniUrl from '../../assets/MiniUrl.png';
import MyCRM from '../../assets/MyCRM.png';
import Stylestrap from '../../assets/Stylestrap.png';
import Sparkz from '../../assets/Sparkz.png';

function Projects() {
  return (
    <section id="Projects">
        <div className='Projects-Content'>
          <h1>Projects</h1>
          <div className='Credentials'>
            <h4>Login Credentials(common)</h4>
            <p>User Id/Email : hari2000venkatesan@gmail.com</p>
            <p>Password : 12345678</p>
          </div>
          <div className='Project-Data'>
          <div className='Projects-Source'>
              <p><b>Sparkz</b></p>
              <img src={Sparkz} alt="Sparkz"/>
              <a href="https://github.com/NeelakandanV/Sparkz-Fe" target="_blank">Frontend Source Code</a> 
              <a href="https://sparkz1.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/NeelakandanV/Sparkz--BE" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>MyCRM</b></p>
              <img src={MyCRM} alt="MyCRM"/>
              <a href="https://github.com/NeelakandanV/MyCrm-FE" target="_blank">Frontend Source Code</a> 
              <a href="https://mycrmportal.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/NeelakandanV/MyCrm-BE" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Mini-Url</b></p>
              <img src={MiniUrl} alt="MiniUrl"/>
              <a href="https://github.com/NeelakandanV/Url-Shortener-FE" target="_blank">Frontend Source Code</a> 
              <a href="https://miniurlshortener.netlify.app/users/" target="_blank">Live Site</a>
              <a href="https://github.com/NeelakandanV/Url_Shortener-BE" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Stylestrap</b></p>
              <img src={Stylestrap} alt="Stylestrap"/>
              <a href="https://github.com/NeelakandanV/Day25" target="_blank">Frontend Source Code</a> 
              <a href="https://trymystylestrap.netlify.app/" target="_blank">Live Site</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects;