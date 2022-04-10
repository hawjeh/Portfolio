import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const currentYear = (new Date()).getFullYear()

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase text-footer">
            <span className="text-primary text-bold">Haw Jeh</span> © {currentYear} All right reseved
          </h4>
          <p>
            <Link to="https://www.linkedin.com/in/hawjeh/" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon="fab fa-linkedin" />
            </Link>
            <Link to="https://github.com/hawjeh" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon="fab fa-github-square" />
            </Link>
            <Link to="https://www.facebook.com/hawjeh" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon="fab fa-facebook-square" />
            </Link>
            <Link to="https://twitter.com/hawjeh" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon="fab fa-twitter-square" />
            </Link>
            <Link to="https://www.instagram.com/hawjeh/" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon="fab fa-instagram-square" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer