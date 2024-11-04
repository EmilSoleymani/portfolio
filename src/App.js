import './App.css';
import { createContext } from 'react';
import Header from './components/Header';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';

export const ThemeContext = createContext();

function App() {
  return (
    <div>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path='/'></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;