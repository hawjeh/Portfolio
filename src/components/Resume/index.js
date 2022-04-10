import React from "react"
import Certification from '../Certification'
import Education from '../Education'
import Experience from '../Experience'
import HeaderResume from "../Header/resume"
import Project from '../Project'
import ResumeProfile from './profile'
import Tool from '../Tool'

const Resume = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 text-center animate__bounceInLeft">
          <ResumeProfile />
        </div>
        <div className="col-12 col-lg-9 animate__fadeIn">
          <Experience />
        </div>
      </div>
      <hr />
      <div className="row animate__fadeIn">
        <div className="col-12 col-lg-7">
          <Education />
        </div>
        <div className="col-12 col-lg-5">
          <Certification />
        </div>
      </div>
      <hr />
      <div className="row animate__fadeIn">
        <div className="col-12 col-lg-4">
          <Tool />
        </div>
        <div className="col-12 col-lg-8">
          <Project />
        </div>
      </div>
      <HeaderResume />
    </div>
  )
}

export default Resume