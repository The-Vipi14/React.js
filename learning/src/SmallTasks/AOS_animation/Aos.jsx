import React from 'react'
import './style.css'
const Aos = () => {
  
   return (
  <div
    className="container"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
  >
    <div className="box">HTML – Structure of the web</div>
    <div className="box">CSS – Styling & layouts</div>

    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">JavaScript – Logic & DOM</div>
    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">React – Component based UI</div>

    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">Node.js – Backend runtime</div>
    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">Express – Server framework</div>

    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">MongoDB – NoSQL database</div>
    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">REST API – Client server flow</div>

    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">Git & GitHub – Version control</div>
    <div className="box"  data-aos="fade-up"
    data-aos-anchor-placement="top-center">Deployment – Live projects</div>
  </div>
);


}

export default Aos