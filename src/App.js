import './App.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { LOCAL, S3_BUCKET_URL, LOCAL_URL, getCorrectUrl } from './globals';

export const ThemeContext = createContext();

function App() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const endpoint = LOCAL === "true" ? LOCAL_URL : S3_BUCKET_URL
    fetch(endpoint + 'articles.json')
      .then(response => response.json())
      .then(data => setBlogData(data.blog))
      .catch(error => console.log(error));    
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="body-wrapper">
        {
          blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, key) => (
            <Post key={key} contentPath={getCorrectUrl(blog.url)} title={blog.title} date={blog.date}></Post>
          ))
        }
      </div>
    </div>
  );
}

export default App;