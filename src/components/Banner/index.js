import React from "react"
import Typewriter from 'typewriter-effect';
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
  const { hello, portrait } = useStaticQuery(
    graphql`
      query {
        hello: file(relativePath: { eq: "hello.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        portrait: file(relativePath: { eq: "portrait.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <section id="banner"
      className="banner-hello animate__fadeIn"
      style={{ backgroundImage: 'url(' + hello.childImageSharp.fluid.src + ')' }}
    >
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-3 d-flex flex-column align-items-center justify-content-center animate__bounceInLeft">
            <img
              src={portrait.childImageSharp.fluid.src}
              alt="portrait"
              style={{ height: '218px', width: '218px'}}
              className="rounded-circle border border-1 border-primary p-2 img-fluid" />
          </div>
          <div className="col-12 col-md-9 mb-3 d-flex flex-column align-items-center justify-content-center animate__bounceInRight">
            <h1>
              I'm <span className="text-primary text-bold border-bottom border-3 border-primary">Haw Jeh</span>
            </h1>
            <Typewriter
              options={{
                strings: ['Tech Whiz · Keep Coding · Keep Fighting'],
                autoStart: true,
                loop: true,
                delay: 75,
                pauseFor: 1000,
                wrapperClassName: 'text-secondary text-uppercase'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner