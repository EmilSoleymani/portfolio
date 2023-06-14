import './App.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';

export const ThemeContext = createContext();

function App() {

  const [isDark, setIsDark] = useState(true)
  const [blogData, setBlogData] = useState([])
  const value = { isDark, setIsDark }

  useEffect(() => {
    fetch('https://lecture-slides.s3.amazonaws.com/articles.json')
      .then(response => response.json())
      .then(data => setBlogData(data.blog))
      .catch(error => console.log(error));    
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      <Header></Header>
      {
        blogData.map((blog, key) => (
          <Post key={key} contentPath={blog.url}></Post>
        ))
      }
    </ThemeContext.Provider>
  );
}

export default App;
