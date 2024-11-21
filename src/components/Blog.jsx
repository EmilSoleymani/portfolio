import React from 'react'
import { useState, useEffect } from 'react';
import Post from './Post';
import { LOCAL, S3_BUCKET_URL, LOCAL_URL, getCorrectUrl } from '../globals';


const Blog = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const endpoint = LOCAL === "true" ? LOCAL_URL : S3_BUCKET_URL
        fetch(endpoint + 'articles.json')
        .then(response => response.json())
        .then(data => setBlogData(data.blog))
        .catch(error => console.log(error));    
    }, []);

    return (
        <div className="body-wrapper">
        {
          blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, key) => (
            <Post key={key} contentPath={getCorrectUrl(blog.url)} title={blog.title} date={blog.date}></Post>
          ))
        }
      </div>
    )
}

export default Blog