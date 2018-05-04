import React, { Component } from 'react';
import HarleyPicture from '../images/harley.jpg';
import DavePicture from '../images/dave.jpg';
import ByakkoPicture from '../images/byakko.png';
import MountainPicture from '../images/mtmansfield.jpg';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="About container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <p>
              I was born and grew up in Greenfield, MA in Western Mass just south of the VT border. I went to school at Franklin County Technical school where I first 
              found my interest in Programming under the guidance of my teacher <a href='http://fcts.org/shops/pwd/pwd.html' target='_blank'>Ms. Cynthia Bussey</a>.
            </p>
            <p>
              <b>On a normal day</b> I like to come home and do a quick workout while trying to not be distracting by my cats, <i>Harley</i> and <i>Dave</i> <br />
              <img src={HarleyPicture} width="200px" />&nbsp;<img src={DavePicture} width="200px" />
            </p>
            <p>
              <b>I have been a hiker</b> since I was very young. My father, Neal, had always brought me up the local hills including Poet's Seat, Mt. Toby, and Sugarloaf Mountain.
              As I got older I made it a point to work on hiking the New England 4k Footers. Despite my love for engineering, hiking is the next best thing to me.
              Most recently I hiked up Mt. Mansfield, the tallest mountain in Vermont. <br />
              <img src={MountainPicture} width="350px" />
            </p>
            <p>
              <b>I love playing video games</b> and the culture around video games and I'm never ashamed of it. I played the original Super Mario Land when it first came to GameBoy when I was very young
              and grew up with games ever since. I love the culture of <b>teams</b> in the world of video games. People around the world who have never met coming together
              to accomplish something really cool. <br /> Here is me and my pickup team at PAX EAST 2018 after we beat <a href="https://ffxiv.gamerescape.com/wiki/The_Jade_Stoa" target='_blank'>Byakko from Final Fantasy XIV</a> and won a free t-shirt. <br />
              <img src={ByakkoPicture} width="300px" />
            </p>
            <p>
              <b>When it comes to working</b>, I could do work any pay so long as I had a great team to work with. A team puts pep in your step when you commute to work
              and it gives you strength to know you are supported when you go on vacation. <br /> 
              <span className='special'>Wherever I go in my career it would <b>have to be with a great team</b></span>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
