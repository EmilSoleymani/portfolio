import React from 'react'

export const Home = () => {
  return (
    <div className='home-wrapper'>
        <div className="bio-wrapper">
            <img className='headshot' src='./assets/imgs/headshot.jpeg'/>
            <div className="bio-description-wrapper">
                <h1>Emil Soleymani <span className='subtitle'>| Software Engineer, 1x AWS Certified</span></h1>
                <p>Hi my name is Emil Soleymani, welcome to my portfolio. I'm a final-year Software Engineering student at McMaster University, where I've spent the last few years honing my skills in backend development, DevOps, and cloud technologies like AWS and Azure. My passion for programming started at a young age, inspired by the idea of creating my own video games. Since then, I've worked extensively with Java, Python, JavaScript, and C, building a strong foundation in software development and problem-solving. I’m excited to leverage my technical expertise and creativity as I step into the tech industry, ready to tackle new challenges and drive innovative solutions.</p>
            </div>
        </div>
    </div>
  )
}
