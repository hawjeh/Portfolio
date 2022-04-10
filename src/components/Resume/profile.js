import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

const ResumeProfile = () => {
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
    <>
      <img
        src={profile.childImageSharp.fluid.src}
        alt="profile"
        className="rounded-circle border border-1 border-primary img-fluid" />
      <h1 className="text-primary text-bold my-3">
        Haw Jeh
      </h1>
      <p>
        Full Stack Developer
      </p>
      <p>
        <a href="mailto:hawjeh.com?subject=Hello%20Nice%20to%20meet%20you">hawjeh@gmail.com</a>
      </p>
    </>
  )
}

export default ResumeProfile