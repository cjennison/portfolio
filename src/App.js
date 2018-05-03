import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import freeSolid from '@fortawesome/fontawesome-free-solid'

import Footer from './components/Footer';

import './App.css';
import './helpers.scss';

fontawesome.library.add(brands, freeSolid)

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className='row header'>
          <div className='col-md-3'>
            <Link to="/">
              <h1>chris.jennison</h1>
            </Link>
          </div>

          <div className='links col-md-3 col-md-offset-6'>
            <div className='links-container'>
              <Link className='nav-btn' to="/portfolio">.work</Link>/&nbsp;
              <Link className='nav-btn' to="/about">.self</Link>
            </div>
          </div>
        </div>
        
        {this.props.children}

        <div className="spacer"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
