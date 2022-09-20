import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect';
import WeddingModal from "./modal";

const Wedding = () => {

  const [modalClass, setModalClass] = useState('modal fade');

  const onRvspClick = () => {
    setModalClass('modal show');
  }

  const onRvspRespClick = (e) => {
    if (e === 'close') {
      setModalClass('modal fade');
    } else {
      setModalClass('modal fade');
    }
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">

      </header>

      <main className="px-3">
        <div id="preloader">
          <img
            src="/wedding/loading.gif"
            alt="loading"
            className="img-fluid" />
        </div>
      </main>

      <footer className="mt-auto">
        <div id="footer-content" className="d-none">
          <div className="save-the-date">
            <h1 id="save">Save</h1>
            <h1 id="the-date">The Date</h1>
            <h2>
              <Typewriter
                options={{
                  strings: ['- 16<span class="red-dot">.</span>09<span class="red-dot">.</span>23 -'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  pauseFor: 3000,
                  wrapperClassName: ''
                }}
              />
            </h2>
          </div>
          <div className="hearts">
            <span className="dash"></span>
            <FontAwesomeIcon icon="fas fa-heart" className="red-heart" />
            <FontAwesomeIcon icon="fas fa-heart" className="white-heart" />
            <span className="dash"></span>
          </div>
          <div className="countdown">
            <h5 className="m-0">
              <span id="day"></span><span className="me-1">d</span>
              <span id="hour"></span><span className="me-1">h</span>
              <span id="minute"></span><span className="me-1">m</span>
              <span id="second"></span><span>s</span>
            </h5>
          </div>
          <div className="hearts">
            <span className="dash"></span>
            <FontAwesomeIcon icon="fas fa-heart" className="red-heart" />
            <FontAwesomeIcon icon="fas fa-heart" className="white-heart" />
            <span className="dash"></span>
          </div>
        </div>
        <div id="rvsp-content" className="d-none">
          <button className="btn btn-lg btn-dark btn-rvsp" onClick={() => onRvspClick()}>
            <FontAwesomeIcon icon="fas fa-paw" className="me-2" />
            RVSP
          </button>
        </div>
      </footer>
      
      <WeddingModal modalClass={modalClass} onRvspRespClick={onRvspRespClick} />
    </div>
  )
}

export default Wedding