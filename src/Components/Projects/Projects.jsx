import React from 'react';

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
              <p><b>MyCRM</b></p>
              <img src="src/assets/MyCRM.png" alt="MyCRM"/>
              <a href="https://github.com/NeelakandanV/MyCrm-FE" target="_blank">Frontend Source Code</a> 
              <a href="https://mycrmportal.netlify.app/" target="_blank">Live Site</a>
              <a href="https://github.com/NeelakandanV/MyCrm-BE" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Mini-Url</b></p>
              <img src="src/assets/MiniUrl.png" alt="MiniUrl"/>
              <a href="https://github.com/NeelakandanV/Url-Shortener-FE" target="_blank">Frontend Source Code</a> 
              <a href="https://miniurlshortener.netlify.app/users/" target="_blank">Live Site</a>
              <a href="https://github.com/NeelakandanV/Url_Shortener-BE" target="_blank">Backend Source Code</a>
            </div>
            <div className='Projects-Source'>
              <p><b>eLibrary Management</b></p>
              <img src="src/assets/eLibrary.png" alt="eLibrary"/>
              <a href="https://github.com/NeelakandanV/Day-32" target="_blank">Frontend Source Code</a> 
              <a href="https://elibrarymanage.netlify.app/" target="_blank">Live Site</a>
            </div>
            <div className='Projects-Source'>
              <p><b>Stylestrap</b></p>
              <img src="src/assets/Stylestrap.png" alt="Stylestrap"/>
              <a href="https://github.com/NeelakandanV/Day25" target="_blank">Frontend Source Code</a> 
              <a href="https://trymystylestrap.netlify.app/" target="_blank">Live Site</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects;