import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from '../../assets/ProfileImage.jpeg';
import ProfilePhoto from '../../assets/ProfilePhoto.png';
import MERN_Image from '../../assets/mern-language-icon.png';

function Home() {
  return (
    <section id="Home">
      <div className='Home-Content'>
        <div className='Home-Text'>
          <h3>Hello,Myself</h3>
          <h1>Neelakandan Venkatesan</h1>
          <h3>And I'm a {" "}
            {<TypeAnimation
                sequence={[
                  'Fullstack Developer',1000,
                  'Frontend Developer',1000,
                  'Backend Developer',1000,
                  'Programmer',1000,
                  'Coder',1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' ,color:"#1F51FF" }}
                repeat={Infinity}
              />
            }
          </h3>
          <div className='Home_Icons'>
            <div className='connects'>
              <p>Connect with me on</p>
              <a href="https://www.linkedin.com/in/neelakandan0203/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#29569e",}} /></a> 
              <a href="#Contact"><FontAwesomeIcon icon={faFileLines} size="2xl" style={{color: "#02a2a2",}} /></a>
              <a href="https://github.com/NeelakandanV/" target='_blank'><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#000000",}} /></a>
              <a href="mailto:hari0709venkatesan@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} size="2xl" /></a>
            </div>
            <div className='domains'>
              <p>Currently working on</p>
              <img src={MERN_Image} alt='MERN'/>
            </div>
          </div>
          <a href="https://drive.google.com/uc?export=download&id=1aM9m1uQMOtaeDc4YJpoyH3FfKk0YQM1w" target='_self'>Download Resume</a>
          <a href="https://drive.google.com/file/d/1aM9m1uQMOtaeDc4YJpoyH3FfKk0YQM1w/view?usp=sharing" target='_blank'>View Resume</a>
        </div>
        <div className='Home-Image'>
          <img src={ProfilePhoto} alt="Profile"/>
        </div>       
      </div>
    </section>
  )
}

export default Home;