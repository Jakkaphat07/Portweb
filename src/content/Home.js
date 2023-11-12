import React from "react";
import "../styles/Home.css";
import {AnimateOnScroll} from 'animate-on-scroll-framer'
import profilepic from '../img/profile.jpg'

function Home() {
  return (
    <div className="home">
      <div className="about">
      <img src={profilepic}  className="profilepic" />
      <AnimateOnScroll animation="flipIn">
        <h2> Hi, My Name is Pangpond</h2>
      </AnimateOnScroll>
        <div className="prompt">
          <AnimateOnScroll animation="flipIn">
            <p>I am a 4th year’s student that interested in front-end, back-end , web developer and Network engineer.</p>
          </AnimateOnScroll>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <AnimateOnScroll animation="flipIn">
              <span>
                ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents
              </span>
            </AnimateOnScroll>  
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <AnimateOnScroll animation="flipIn">
              <span>
                NodeJS, MySQL, MongoDB
              </span>
            </AnimateOnScroll>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <AnimateOnScroll animation="flipIn">
              <span>JavaScript, Java, Python, C#, C, TypeScript</span>
            </AnimateOnScroll>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;