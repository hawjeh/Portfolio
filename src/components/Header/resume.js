import React from "react"
import { Link } from 'gatsby'

const HeaderResume = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <p>
        <Link to="#experience" className="text-decoration-none">Experience</Link><span> | </span>
        <Link to="#education" className="text-decoration-none">Education</Link><span> | </span>
        <Link to="#certification" className="text-decoration-none">Certification</Link><span> | </span>
        <Link to="#tool" className="text-decoration-none">Tools</Link><span> | </span>
        <Link to="#project" className="text-decoration-none">Project</Link>
      </p>
    </div>
  )
}

export default HeaderResume