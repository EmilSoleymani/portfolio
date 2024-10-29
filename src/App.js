import './App.css';
import { createContext, useState, useEffect } from 'react';
import Header from './components/Header';
import Post from './components/Post';

export const ThemeContext = createContext();

const LOCAL = true;
const S3_BUCKET_URL = 'https://emil-soleymani-portfolio-markdown.s3.amazonaws.com/'
const LOCAL_URL = './portfolio-markdown/'

function App() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    const endpoint = LOCAL ? LOCAL_URL : S3_BUCKET_URL
    fetch(endpoint + 'articles.json')
      .then(response => response.json())
      .then(data => setBlogData(data.blog))
      .catch(error => console.log(error));    
  }, []);

  function getBlogUrl(url) {
    if (LOCAL) {
      // Remove the default S3_BUCKET prefix if LOCAL
      let n = S3_BUCKET_URL.length;
      url = url.slice(n);
      // Add LOCAL_URL to beginning instead
      url = LOCAL_URL + url
    }
    return url
  }

  return (
    <div>
      <Header></Header>

      <div className="body-wrapper">
        {
          blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, key) => (
            <Post key={key} contentPath={getBlogUrl(blog.url)} title={blog.title} date={blog.date}></Post>
          ))
        }
      </div>
    </div>
  );
}

export default App;