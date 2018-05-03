import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FeaturedProject from '../components/FeaturedProject';
import SelfPicture from '../images/personal_picture.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row section top-section">
          <div className="col-md-6 col-md-offset-3">
            <img src={SelfPicture} width="100px" alt="selfie" />
            <div className="social-media">
              <a href='https://hired-user-uploads.s3.amazonaws.com/candidate_profiles/812653/resumes/1525293552/Jennison_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIS6XZT6OESTXPSQA%2F20180503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20180503T185453Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=bf5e2002b3ce5c2e5b97f2736cceb01dc541c919e742218fb3e350ad6aba85e3' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "file-alt"]} /></a>
              <a href='https://www.linkedin.com/in/christopher-jennison-27223825/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
              <a href='https://twitter.com/cjenn92' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
            </div>
            <div className="keywords">
              <span className="word">engineer</span>&nbsp;/&nbsp;
              <span className="word">leader</span>
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
