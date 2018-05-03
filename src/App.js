import React, { Component } from 'react';
import SelfPicture from './images/personal_picture.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row header'>
          <div className='col-md-3'>
            <a href="#">
              <h1>chris.jennison</h1>
            </a>
          </div>

          <div className='links col-md-3 col-md-offset-6'>
            <div className='links-container'>
              <a className='nav-btn' href="#">.work</a>/&nbsp;
              <a className='nav-btn' href="#">.fun</a>/&nbsp;
              <a className='nav-btn' href="#">.self</a>
            </div>
          </div>
        </div>

        <div className="row section">
          <div className="col-md-6 col-md-offset-3">
            <img src={SelfPicture} width="100px" alt="selfie" />
            <div className="keywords">
              <span className="word">engineer</span>&nbsp;
              <span className="word">leader</span>&nbsp;
              <span className="word">friend</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>

        <div className="row section">
          <div className="col-md-6 col-md-offset-3">
            <hr />
            <div className="current-job">
              <h2>working: <a href='http://twitter.com/promoboxx' target='_blank'>@Promoboxx</a></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
