import React from 'react';
import { BrowserRouter, Route, Link,Routes } from 'react-router-dom';
import Home from './Home';
import "../App.css"


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
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />
       <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Menu;
