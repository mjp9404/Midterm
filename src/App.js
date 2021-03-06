import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Cards from './component/Cards'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          <p>------------------------------------------------------------------------------------------</p>

          <div>
            <h2>Part 2_2</h2>
            <h1>Student List</h1>
            <Cards />
          </div>

        </div>

      </Router>

    );
  }
}

export default App;