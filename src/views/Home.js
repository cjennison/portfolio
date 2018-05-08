import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FeaturedProject from '../components/FeaturedProject';
import SelfPicture from '../images/personal_picture.jpg';
import moment from 'moment';

import UmassAmherst from  '../images/umass.png';

class Home extends Component {

  constructor(props) {
    super(props);
    this.timeSince = moment([2013, 1, 1]).fromNow(true);
  }

  render() {
    return (
      <div className="Home">
        <div className="row section top-section">
          <div className="col-md-6 col-md-offset-3">
            <img src={SelfPicture} width="100px" alt="selfie" />
            <div className="social-media">
              <a href='/Jennison_Resume.pdf' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "file-alt"]} /></a>
              <a href='https://www.linkedin.com/in/christopher-jennison-27223825/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
              <a href='https://twitter.com/cjenn92' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
              <a href='https://github.com/cjennison' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /></a>
            </div>
            <div className="keywords">
              <span className="word">business focused engineer</span>&nbsp;/&nbsp;
              <span className="word">future thinking leader</span>
            </div>
            <div className="description">
              <p>
                My name is Christopher Jennison. I am a professional software engineer with { this.timeSince } of engineering experience. I have worked in many areas including
                video games, government, and SaaS. I love JavaScript as my favorite programming language with Python in close second. I graduated from UMass Amherst <img src={UmassAmherst} width="20px" /> with a Bachelors of Science in Computer Science.
              </p>
            </div>
          </div>
        </div>

        <div className="row section">
          <div className="col-md-6 col-md-offset-3">
            <b>Mini Work Experience Resume</b> <br />

            <div className="row">
              <div className="col-md-2 col-md-offset-1 text-right">2015-Present</div>
              <div className="col-md-4 text-left"><b>Promoboxx</b></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-left">
                Full Stack Software Engineer. Led feature development teams, SCRUM teams, and held technical discussions. Built app.promoboxx.com and architected consumer reporting.
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-md-offset-1 text-right">2013-2015</div>
              <div className="col-md-4 text-left"><b>USGS</b></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-left">
                Full Stack Software Engineer. Built GIS Web Applications, attending meetings with state legislators to present projects.
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-md-offset-1 text-right">2010-2013</div>
              <div className="col-md-4 text-left"><b>Hitpoint Studios</b></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-left">
                Software Engineer. Built brand games in ActionScript for a wide variety of clients.
              </div>
            </div>

            <a href='/Jennison_Resume.pdf' target='_blank' rel="noopener noreferrer">
              Full Resume
            </a>
          </div>
        </div>

        <div className="row section">
          <div className="col-md-6 col-md-offset-3">
            <hr />
            <div className="current-job">
              <h2>working: <a href='http://twitter.com/promoboxx' rel="noopener noreferrer" target='_blank'>@Promoboxx</a></h2>
              <FeaturedProject />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
