import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="App">
      <div className='navigation'>
        <nav>
          <div className="nav">
            <span className="nav-logo">LOGO</span>
            <div><button className="nav-button" type="button">Login</button>
              <button className="nav-button" type="button">Signup</button></div>
          </div>
        </nav>
        <div className='list'>
          <ul className="util nav-list">
            <li>overview</li>
            <li>curriculum</li>
            <li>refund</li>
            <li>testimonials</li>
          </ul>
        </div>
      </div>
      <div className='main'>
        <span className='span'>
          <svg className='emoji w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>
          <span>
            An IIT Delhi Alumni Initiative
          </span>
        </span>
        <div className='main-content'>
          <h1>Become an Expert in the field of<span>Data Science with 6 courses</span></h1>
        </div>
        <span>specially crafted Tech Kickstarter, with<span className='main-text'>5+ extensive online courses</span></span>
        <div className='main-features'>
          <span className='feature'><svg className='star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
            personal Mentorship</span>
          <span className='feature'><svg className='star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>Internship assistance</span>
          <span className='feature'><svg className='star' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>industry certified courses</span>
        </div>
        <div className='main-button'>
          <div><button className='enroll'>Enroll now <svg className='arrow text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
          </button></div><div><button className='enroll'>Know more <svg className='que' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 119 8 256 8s248 111.1 248 248zM262.7 90c-54.5 0-89.3 23-116.5 63.8-3.5 5.3-2.4 12.4 2.7 16.3l34.7 26.3c5.2 3.9 12.6 3 16.7-2.1 17.9-22.7 30.1-35.8 57.3-35.8 20.4 0 45.7 13.1 45.7 33 0 15-12.4 22.7-32.5 34C247.1 238.5 216 254.9 216 296v4c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-1.3c0-28.5 83.2-29.6 83.2-106.7 0-58-60.2-102-116.5-102zM256 338c-25.4 0-46 20.6-46 46 0 25.4 20.6 46 46 46s46-20.6 46-46c0-25.4-20.6-46-46-46z" /></svg>
          </button></div>
        </div>
      </div>
      <div className='main-end'>
        <div className='end'>24 courses</div>
        <div className='end'>30k+ learners</div>
        <div className='end'>100k+ doubts solved </div>
        <div className=''>10k+ student projects</div>
      </div>
      <div className="curiculum">
        <div className="curiculump-1">
          <p className="span-heading">DATASCIENCE COURSE LEARNING PATH</p>
          <h2><span className="gradient">Data Science </span>Course Curriculum</h2></div>

        <div className="curriculum-container">
          <div className="curriculum-span">
            <div className="subheading-div">
              <span className="subheading">C++</span>
              <span>Learn C++ for strong programming fundamentals.</span>
            </div>
            <button className="curriculum-button">view curriculum</button></div>
          <div className="curriculum-span">
            <div className="subheading-div">
              <span className="subheading">MERN Stack</span>
              <span>Master the MERN stack for high-demand projects</span>
            </div>
            <button className="curriculum-button">view curriculum</button></div>
          <div className="curriculum-span">
            <div className="subheading-div">
              <span className="subheading">Data Structure & Algorithms</span>
              <span>Excel in Data Structures and Algorithms for interview success.
              </span>
            </div>
            <button className="curriculum-button">view curriculum</button></div>
          <div className="curriculum-span">
            <div className="subheading-div">
              <span className="subheading">Competetive Programming</span>
              <span>Excel in Data Structures and Algorithms for interview success.
              </span>
            </div>
            <button className="curriculum-button">view curriculum</button></div>
        </div>
      </div>
      <header className="secondtext">
        <p>Don't miss out on this<span className='second-text'> limited-time opportunity</span> to learn for <span className='second-text'>Free!</span></p>
        <div className='progress-box'>
          <span className='progress-text'>100% Refund Offer</span>
          <h6>20 Seats Left</h6>
          <div className='full-bar'>
            <div className='progress-bar'>

            </div>
            <div className='progress-circle'></div>
          </div>
          <Countdown className="countdown" minutes={minutes} seconds={seconds} />
        </div>
      </header>
      <div className='second-end'>
        <h1>how does it work?</h1>
      </div>
      <div className='secend-box'>
        <div className='step-1 shape'>
          step-1
          <div></div>
        </div>
        <div className='border-1'></div>
        <div className='step-2'>
          step-2
          <div></div>
        </div>
        <div className='border-2'>  </div>
        <div className='step-3'>
          step-3
          <div></div>
        </div>
      </div>
      <div className='section3-box'>
        <div>
          <h2>Top Companies hiring <span className='gradient'>Data Scientist</span></h2>
        </div>
      </div>
      <div className='section3-body'>
        <div className='section3-div'>Logo</div>
        <div className='section3-div'>Logo</div>
        <div className='section3-div'>Logo</div>
        <div className='section3-div'>Logo</div>
        <div className='section3-div'>Logo</div>
      </div>
      <div className='section3-footer'>
        <h2>Unlock <span className='second-text'>6 Certificates</span> & <span className='second-text'>Internship Opportunities</span></h2>
      </div>
      <div className='sec3foot-box'>
        <div className='sec3foot-body1'>
          <div className='sec3foot-body'><span>get 6 industry recognised Certificates</span></div>
          <div>
            <img src="/helo.img" alt="certificate" />
          </div>
        </div>
        <div className='sec3foot-body2'>
          <div className='sec3foot-body'><div><span>bag Internship Opportunities</span></div><span className='span3'>with every course, we make you not only  industry-ready but also help you crack your first first Internship</span></div>
        </div>
      </div>
      <div className='end'>
        <div className='end1'>
          <div className='end11'><span className='end11p'>enroll for DATASCIENCE </span><div> bundle @1499 <span className='value'>₹2600</span>
          </div>
            <span className='value1'>become an expert  in the  Data Science feild by enrolling into 6  extensive courses!</span>
            <div> <button className='button1'>
              Enroll Now</button></div>
          </div>
          <div className='end12'>
            total number of courses
            <span className='end12p'>6</span>
            total number of certificates
            <span className='end12p'>6</span>
            access to courses
            <span className='end12p'>lifetime</span>
          </div>
        </div>
        <div className='end2'>
          <div className='end11'><span className='end11p'>enroll for DATASCIENCE bundle @1499 </span><span className='value'>₹2600</span>
            <span className='value1'>become an expert  in the  Data Science feild by enrolling into 6  extensive courses!</span>
            <div> <button className='button1'>
              Enroll Now</button></div>
          </div>
          <div className='end12'>
            total number of courses
            <span className='end12p'>6</span>
            total number of certificates
            <span className='end12p'>6</span>
            access to courses
            <span className='end12p'>lifetime</span>
          </div>
        </div>
      </div>
    </div>

  );
};
const Countdown = ({ minutes, seconds }) => {
  return (
    <p className="countdown">
      Offer ends in {minutes} minutes {seconds} seconds
    </p>
  );
};

export default App;
