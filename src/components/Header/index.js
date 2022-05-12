import React from 'react'

const Header = ({ showHome }) => {
  return (
    <section id="header" className='w-100 d-flex justify-content-center'>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav mb-2 mt-3 mt-lg-0 mb-lg-0">
            {
              showHome && (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-primary" aria-label="Home" href='/'>Home</a>
                  </li>
                  <li className='nav-item'>
                    <span className='nav-link'>|</span>
                  </li>
                </>
              )
            }
            <li className="nav-item">
              <a className="nav-link text-primary" aria-label="Resume" href='/resume'>Resume</a>
            </li>
            <li className='nav-item'>
              <span className='nav-link'>|</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-label="Blog" href='/blog'>Blog</a>
            </li>
            <li className='nav-item'>
              <span className='nav-link'>|</span>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-label="Sitemap" href='/sitemap'>Sitemap</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
};

export default Header;
