import './App.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';

export const ThemeContext = createContext();

const endpoint = 'https://lecture-slides.s3.amazonaws.com/articles.json'

function App() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setBlogData(data.blog))
      .catch(error => console.log(error));    
  }, []);

  return (
    <div>
      <Header></Header>

      <div className="body-wrapper">
        {
          blogData.map((blog, key) => (
            <Post key={key} contentPath={blog.url}></Post>
          ))
        }
      </div>
    </div>
  );
}

export default App;
