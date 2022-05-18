import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const ResumeProfile = ({ onPrintClick }) => {
  const { profile } = useStaticQuery(
    graphql`
      query {
        profile: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 235) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="row mb-5">
      <div className="col-6 col-lg-12">
        <img
          src={profile.childImageSharp.fluid.src}
          alt="profile"
          className="rounded-circle border border-1 border-primary img-fluid" />
      </div>
      <div className="col-6 col-lg-12">
        <h1 className="text-primary text-bold my-3">
          Haw Jeh
        </h1>
        <p>
          Full Stack Developer
        </p>
        <p>
          <a href="mailto:hawjeh.com?subject=Hello%20Nice%20to%20meet%20you">hawjeh@gmail.com</a>
        </p>
        <button className="btn btn-primary btn-print" onClick={() => onPrintClick()}>Print resume</button>
        <span className="printshow">Printed from <Link to="https://www.hawjeh.com/resume/" target="_blank" rel="noopener noreferrer">hawjeh.com/resume</Link></span>
      </div>
    </div>
  )
}

export default ResumeProfile