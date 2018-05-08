import React, { Component } from 'react';
import './Portfolio.scss';

import AppPromoboxxImage from '../images/featured_project.png';
import SchedulessImage from '../images/scheduleless.png';
import IceExplorerImage from '../images/ice_explorer.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio container">
        <div className="row forward">
          <div className="col-md-6 col-md-offset-6">
            <p>
                These are the projects I am most proud of. I have worked on many projects in my career, many of which did not get very far.
                These are my 'finished' projects. (As finished as any developer will admit)
            </p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="row">
            <div className="col-md-2 text-right portfolio-date">2015-Present</div>
            <div className="col-md-10 text-left portfolio-name">
              <a href='http://app.promoboxx.com'>app.promoboxx.com</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 portfolio-image">
              <img src={AppPromoboxxImage} width="100%"/>
            </div>
            <div className="col-md-8 text-left portfolio-text">
              <p>
                I was hired in July of 2015 on a contract to work for Promoboxx Inc by Dan Koziak.
                The project I was hired for was to assist in a total change of business from a single retailer single brand
                to one user many brand achitecture. This warranted an entirely new UI and the business wanted to use new technology to do so - so we chose AngularJS.
              </p>
              <p>
                Over time 2 more engineers were hired to join the project, Brian Cleary from Draft Kings and Joseph Ware from Microsoft.
                More developers already at Promoboxx came on as well to work on App.promoboxx.com including Corey Psoinos and Dave Poirer.
              </p>
              <p>
                In March of 2016 we launched R1 to our flagship client, Chevrolet and began the process of moving more and more clients to app.promoboxx.
                As the application grew we became product owners for varying parts of the site. I focused on
                Social media sharing, advertisement purchasing, and reporting.
              </p>
              <p>
                Brian, Joseph, Corey, and myself still support the application today along with many other engineers who were hired post launch continuing to build on it and migrate to VueJS 2.X.
                App.promoboxx.com was my proudest achievement at Promoboxx as an application I helped architect from the ground up and
                getting to work with a team who enjoyed doing the same.
              </p>
              <p className='tech text-right'>AngularJS, VueJS, Ruby on Rails, MySQL</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="portfolio-item">
          <div className="row">
            <div className="col-md-2 text-right portfolio-date">2017</div>
            <div className="col-md-10 text-left portfolio-name">
              <a href='http://scheduleless.com'>scheduleless.com</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 portfolio-image">
              <img src={SchedulessImage} width="100%"/>
            </div>

            <div className="col-md-8 text-left portfolio-text">
              <p>
                Scheduleless started as a hobby project by Colin Petruno, Jenny Traer, Simon Leung, and myself. We were to build a employee scheduling application
                cheap enough to undercut the saturated market of scheduling software and make a few bucks. Our trick was to employ an automated scheduling algorithm.
              </p>
              <p>
                I was responsible for the scheduling algorithm. I combined elements from Soduku solving utilizing <i>constraint propogation</i>&nbsp;
                to determine employees eligible for shift hours depending on user requests and business needs.
              </p>
              <p>
                I was proud of the algorithm that I wrote. I played with weights on varying user needs to determine the best possible schedule coverage for businesses and
                someday hope to return and continue to perfect the algorithm.
              </p>
              <p className='tech text-right'>Ruby on Rails, PostgreSQL, Python</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="portfolio-item">
          <div className="row">
            <div className="col-md-2 text-right portfolio-date">2014-2015</div>
            <div className="col-md-10 text-left portfolio-name">
              <a href='http://ice.ecosheds.org'>ice.ecosheds.org</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 portfolio-image">
              <img src={IceExplorerImage} width="100%"/>
            </div>

            <div className="col-md-8 text-left portfolio-text">
              <p>
                While I was in college I got the opportunity to work for the United States Geological Survey at the Silvio Conte Anadronous Fish Research Laboratory in Turners Falls, MA.
                When I was there among other projects, we seeked to build application using NodeJS, AngularJS, and D3.js to bring
                fast innovative web development into the world of state legislation for environmental protection.
              </p>
              <p>
                The ICE Explorer (Interactive Catchment Explorer) was one of those applications. The application used a PostgreSQL database with PostGIS to serve
                polygon coordinates to the front end and display interactive catchment polygons described by various metrics including Forest Cover and expected Brook Trout Survival rate given temperature change.
              </p>
              <p>
                The application was built under the guidance of Dr Jeffrey Walker and Dr Benjamin Letcher.
              </p>
              <p className='tech text-right'>NodeJS, AngularJS, D3.js</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
