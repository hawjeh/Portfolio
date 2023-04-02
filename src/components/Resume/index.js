import React from "react"
import ShareThis from '../ShareThis'
import Certification from '../Certification'
import Education from '../Education'
import Experience from '../Experience'
import HeaderResume from "../Header/resume"
import MiniProject from '../MiniProject'
import Project from '../Project'
import ResumeProfile from './profile'
import Tool from '../Tool'

const Resume = ({ location }) => {
  return (
    <>
      <div id="resume_page" className="container">
        <div className="row">
          <div className="col-12 col-lg-3 text-left text-lg-center animate__bounceInLeft">
            <ResumeProfile />
          </div>
          <div className="col-12 col-lg-9 animate__fadeIn">
            <Experience />
          </div>
        </div>
        <hr className="printhide my-5" />
        <div className="row animate__fadeIn printpagebreak">
          <div className="col-12 col-lg-7 mb-4">
            <Education />
          </div>
          <div className="col-12 col-lg-5 mb-4 printpagebreak">
            <Certification />
          </div>
        </div>
        <div className="row animate__fadeIn printpagebreak">
          <Tool />
        </div>
        <hr className="printhide my-5" />
        <div className="row animate__fadeIn printpagebreak">
          <div className="col-12 col-lg-8 printpagebreak">
            <Project />
          </div>
          <div className="col-12 col-lg-4 printpagebreak">
            <MiniProject />
          </div>
        </div>
      </div>
      <div className="my-5 text-center">
        <HeaderResume />
        <ShareThis center={true} />
      </div>
    </>
  )
}

export default Resume