import React, { useRef } from "react"
import { useReactToPrint } from 'react-to-print'
import AddThis from '../AddThis'
import Certification from '../Certification'
import Education from '../Education'
import Experience from '../Experience'
import HeaderResume from "../Header/resume"
import Project from '../Project'
import ResumeProfile from './profile'
import Tool from '../Tool'

import { Link } from "gatsby"

const Resume = ({ location }) => {
  const componentRef = useRef();
  const onPrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div id="resume_page" className="container" ref={componentRef}>
        <div className="row">
          <div className="col-12 col-lg-3 text-center animate__bounceInLeft">
            <ResumeProfile />
            <button className="btn btn-primary btn-print" onClick={() => onPrintClick()}>Print resume</button>
            <span className="printshow">Printed from <Link to="https://www.hawjeh.com/resume/" target="_blank" rel="noopener noreferrer">hawjeh.com/resume</Link></span>
          </div>
          <div className="col-12 col-lg-9 animate__fadeIn">
            <Experience />
          </div>
        </div>
        <hr className="printhide" />
        <div className="row animate__fadeIn printpagebreak">
          <div className="col-12 col-lg-7">
            <Education />
          </div>
          <div className="col-12 col-lg-5">
            <Certification />
          </div>
        </div>
        <hr className="printhide" />
        <div className="row animate__fadeIn printpagebreak">
          <div className="col-12 col-lg-4 printpagebreak">
            <Tool />
          </div>
          <div className="col-12 col-lg-8 printpagebreak">
            <Project />
          </div>
        </div>
      </div>
      <HeaderResume />
      <AddThis href={location.href} title="Resume" center={true} />
    </>
  )
}

export default Resume