import React,{useEffect} from 'react';
import { ProgressBar } from 'react-bootstrap';

// Importing Tagcloud
import TagCloud from 'TagCloud';

function Skills() {
      // Animation settings for text cloud
      useEffect(()=>{
        const container = ".tagcloud";
        const texts = [
            "HTML5",
            "CSS3",
            "JAVASCRIPT",
            "REACT JS",
            "NODE JS",
            "EXPRESS JS",
            "MONGODB",
            "MYSQL",
            "MONGOOSE",
            "AWS",
            "GIT",
            "GITHUB",
            "POSTMAN",
            "JWT",
            "RENDER",
            "NETLIFY",
            "BOOTSTRAP",
            "MATERIALUI"
        ];

        const options ={
            radius: 150,
            maxSpeed: "normal",
            initSpeed: "fast",
            keep: true,
        };

        TagCloud(container,texts,options)
    },[])

  return (
    <section id="Skills">
        <div className='Skills-Content'>
          <h1>Skills</h1>
          <div className='Skills_Setup'>
            <div className='Skill-level'>
              <img src="src/assets/Html5.png" alt='HTML5'/>
              <label>HTML5</label>
              <ProgressBar className='Progress-Display' animated now={85} />
              <img src="src/assets/CSS3.png" alt='CSS3'/>
              <label>CSS3</label>
              <ProgressBar className='Progress-Display' animated now={78} />
              <img src="src/assets/JavaScript.png" alt='JS'/>
              <label>Javascript</label>
              <ProgressBar className='Progress-Display' animated now={78} />
              <img src="src/assets/BootStrap5.png" alt='BootStrap5'/>
              <label>Bootstrap</label>
              <ProgressBar className='Progress-Display' animated now={85} />
              <img src="src/assets/ReactJs.png" alt='ReactJs'/>
              <label>React Js</label>
              <ProgressBar className='Progress-Display' animated now={70} />
              <img src="src/assets/MongoDB.png" alt='MongoDB'/>
              <label>MongoDB</label>
              <ProgressBar className='Progress-Display' animated now={90} />
              <img src="src/assets/expressJs.png" alt='express Js'/>
              <label>Express Js</label>
              <ProgressBar className='Progress-Display' animated now={83} />
              <img src="src/assets/NodeJs.png" alt='NodeJs'/>
              <label>Node Js</label>
              <ProgressBar className='Progress-Display' animated now={80} />
              <img src="src/assets/MYSQL.png" alt='MySQL'/>
              <label>MySQL</label>
              <ProgressBar className='Progress-Display' animated now={70} />
              <img src="src/assets/AWS.png" alt='AWS'/>
              <label>AWS</label>
              <ProgressBar className='Progress-Display' animated now={60} />
              <img src="src/assets/MaterialUI.png" alt='MaterialUI'/>
              <label>MaterialUI</label>
              <ProgressBar className='Progress-Display' animated now={80} />

              <div className='Tools'>
                <img src='src/assets/Git.png' alt='Git'/>
                <img src='src/assets/Github.png' alt='Github'/>
                <img src='src/assets/Postman.png' alt='Postman'/>
              </div>
            </div>
            <div className='Skills-Sphere'></div>
              <span className='tagcloud'></span>
          </div>
        </div>
    </section>
  )
}

export default Skills;