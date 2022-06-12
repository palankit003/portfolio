import React from 'react'
import Navbar from '../components/Navbar'
import pic from './mountain.jpg';
import './Home.css'
import {IoLogoJavascript} from "react-icons/io"
import {FaHtml5,FaCss3,FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
const Home = () => {
  return (
    <>
      <Navbar/>
      <img className="b-img" src={pic} alt='mountain'></img>
      <div className='intro-container'>
        <p className='intro'>Hi Everyone, I am</p>
        <p className='name'>Ankit Pal</p>
        <p className='intro'>A <span className='style'>FrontEnd Developer</span></p>
      </div>
      <div className='main-container'>
        <div className='project-container'>
          <p className='headings'>Projects</p>
          <div className='project-info-container'>
            <div>Project 1</div>
            <div>Project 2</div>
            <div>Project 3</div>
            <div>Project 4</div>
            <div>Project 5</div>
          </div>
        </div>
        <div className='skill-container'>
          <p className='headings'>Skills</p>
          <div className='skill-info-container'>
            <p className='skill-sym'><IoLogoJavascript/><p className='skill-detail'>JavaScript</p></p>
            <p className='skill-sym'><FaHtml5/><p className='skill-detail'>HTML</p></p>
            <p className='skill-sym'><FaCss3/><p className='skill-detail'>CSS</p></p>
            <p className='skill-sym'><SiTailwindcss/><p className='skill-detail'>Tailwind CSS</p></p>
            <p className='skill-sym'><FaReact/><p className='skill-detail'>React JS</p></p>
          </div>
        </div>
        <footer>
          <div className='contact-container'>
            <p className="headings">Contact</p>
            <div className='contact-subcontainer' style={{display:"flex",padding:"0px 2rem",justifyContent:"space-between"}}>
              <div style={{margin:"0 2rem"}}>
                <p>Saurabh Vihar Colony</p>
                <p>Awaleshpur</p>
                <p>Varanasi 221106</p>
                <p>Uttar Pradesh</p>
                <p>India</p>
              </div>
              <div style={{margin:"0 2rem"}}>
              <p>palankit003.ap@gmail.com</p>
              <p>+918707278056</p>
              </div>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home