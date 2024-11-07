import React from 'react'
import { useState, useEffect } from 'react'
import { LOCAL, S3_BUCKET_URL, LOCAL_URL } from '../globals';

export const Home = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const endpoint = LOCAL === "true" ? LOCAL_URL : S3_BUCKET_URL
        fetch(endpoint + 'articles.json')
        .then(response => response.json())
        .then(data => setBlogData(data.blog.sort((a, b) => new Date(b.date) - new Date(a.date))))
        .catch(error => console.log(error));    
    }, []);

    return (
        <div className='home-wrapper'>
            <div className="bio-wrapper">
                <img className='headshot' src='./assets/imgs/headshot.jpeg' alt='headshot'/>
                <div className="bio-description-wrapper">
                    <h1>Emil Soleymani <span className='subtitle'>| Software Engineer, 1x AWS Certified</span></h1>
                    <p>Hi my name is Emil Soleymani, welcome to my portfolio. I'm a final-year Software Engineering student at McMaster University, where I've spent the last few years honing my skills in backend development, DevOps, and cloud technologies like AWS and Azure. My passion for programming started at a young age, inspired by the idea of creating my own video games. Since then, I've worked extensively with Java, Python, JavaScript, and C, building a strong foundation in software development and problem-solving. I’m excited to leverage my technical expertise and creativity as I step into the tech industry, ready to tackle new challenges and drive innovative solutions.</p>
                </div>
            </div>

            <div className="blog-wrapper">
                <h1 className="blog-title">Blog</h1>
                <p className='blog-description'>Explore my blog, where I share insights and experiences from my tech projects and dive into topics I'm passionate about in software and development. Here is a snippet from my most recent post:</p>
                <div className="blog-post-container">
                    <h3>{blogData[0]?.title}</h3>
                    <h5>{blogData[0]?.date}</h5>
                    <p className='blog-summary'>{blogData[0]?.summary}</p>
                    <a href="/blog">Read More &rarr;</a>
                </div>
            </div>
        </div>
    )
}
