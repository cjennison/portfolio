import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-text">
          © 2018 chris-jennison.com all rights reserved
        </div>
        <div className="footer-text pull-right">
          written with react <a href='https://github.com/cjennison/portfolio' target='_blank' rel="noopener noreferrer">github</a>
        </div>
      </div>
    )
  }
}

export default Footer;
