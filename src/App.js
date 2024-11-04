import './App.css';
import { createContext } from 'react';
import Header from './components/Header';
import { Home } from './components/Home';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';

export const ThemeContext = createContext();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;