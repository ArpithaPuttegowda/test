import React from 'react';
import { BrowserRouter, Route, Link,Routes } from 'react-router-dom';
import Home from './Home';
import "../App.css"
import { GetPost } from './GetPost';


const About = () => (
  <div>
    <h2 data-testid="about">About</h2>
    <p>This is the about page.</p>
  </div>
);

function Menu() {
  return (
    <BrowserRouter>
      <div className="App">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/post">Posts</Link>
        <hr />
       <Routes>
        <Route path="/home"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/post" element={<GetPost/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Menu;
