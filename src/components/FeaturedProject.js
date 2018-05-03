import React, { Component } from 'react';
import './FeaturedProject.scss';

import FeatureImage from '../images/featured_project.png';


class FeaturedProject extends Component {
  render() {
    return (
      <div className="FeaturedProject">
        <div className="row">
          <div className="col-md-6">
            <div className="project-text">
              <a href='http://app.promoboxx.com' target='_blank' rel="noopener noreferrer">app.promoboxx.com</a> <br />
              written in angular 1.5x and vue 2<br />
              9 month development time<br />
              a team of 4 front end engineers, grew to 11<br />
              architected the first iteration and finished<br />
              continually built on for 2 years<br />
              migrated to VueJS 2.0 with element.ui<br />
              supports 20,000 retailers<br />
              customer of over 60 brands<br />
            </div>
          </div>
          <div className="col-md-6">
            <a href='http://app.promoboxx.com' target='_blank' rel="noopener noreferrer">
              <img src={FeatureImage} width="100%" alt="my favorite project at the moment" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedProject;
