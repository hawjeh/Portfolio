import React, { useState, useCallback, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect';
import WeddingModal from "./modal";
// import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

const Wedding = () => {

  const [name, setName] = useState("");
  const [noOfPax, setNoOfPax] = useState("1");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [message, setMessage] = useState("");
  const [cardLanguage, setCardLanguage] = useState(true);

  const [modalClass, setModalClass] = useState('modal fade');
  const [cardModalClass, setCardModalClass] = useState('modal fade');
  const [wazeModalClass, setWazeModalClass] = useState('modal fade');

  const onRvspClick = () => {
    setModalClass('modal show');
  }

  const onRvspSaveClick = (e) => {
    if (name !== '' && noOfPax > 0 && email !== '') {
      setMessage("");
      const requestOptions = {
        method: 'POST',
        mode: "no-cors",
        redirect: 'follow'
      };

      fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfeNi9nNw8LhFyRRirFHq_2MVCD6SxuDyyg_fbvSzAtWvGKvQ/formResponse?&submit=Submit&usp=pp_url&entry.974618649=${encodeURIComponent(name)}&entry.1996470838=${encodeURIComponent(noOfPax)}&entry.810847730=${encodeURIComponent(email)}&entry.559199112=${encodeURIComponent(whatsApp)}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      setModalClass('modal fade');
      setName("");
      setNoOfPax("1");
      setEmail("");
      setWhatsApp("");
      setMessage("");
      setCardModalClass('modal show');
    } else {
      setMessage("Please fill in the required fields.");
    }
  }

  const onRvspCloseClick = (e) => {
    setModalClass('modal fade');
    setName("");
    setNoOfPax("1");
    setEmail("");
    setWhatsApp("");
    setMessage("");
  }

  const ref = useRef();
  const onCardSaveClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'hjxmy_invitation.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const onCardCloseClick = (e) => {
    setCardModalClass('modal fade');
  }

  const onWazeClick = (e) => {
    setWazeModalClass('modal show');
  }

  const onWazeCloseClick = (e) => {
    setWazeModalClass('modal fade');
  }

  const onCardLanguageToggle = (e) => {
    setCardLanguage(!cardLanguage);
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
            <FontAwesomeIcon icon="fas fa-paw" className="me-1" />
            RVSP
          </button>
        </div>
        <div id="cal-add-content" className="d-none">
          <button className="btn btn-lg btn-dark btn-rvsp mt-3 me-3" onClick={() => onWazeClick()}>
            <FontAwesomeIcon icon="fab fa-waze" className="me-1" />
            Waze
          </button>
          <a href="/wedding/hjxmy_wedding.ics" className="btn btn-lg btn-dark btn-rvsp mt-3">
            <FontAwesomeIcon icon="fas fa-calendar" className="me-1" />
            Calendar
          </a>
        </div>
      </footer>

      <WeddingModal modalClass={modalClass} onCloseClick={onRvspCloseClick} onSaveClick={onRvspSaveClick} showSave={true}>
        <div className="p-3 pt-0 mx-auto">
          <h1>
            RVSP to #HJxMY Wedding
          </h1>
          <div style={{ 'maxWidth': '368px' }} className="d-flex flex-column mx-auto text-start mt-3">
            <div className="mb-1">
              <label htmlFor="name" className="form-label">Full Name in Chinese & English | 中英文名 <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-1">
              <label htmlFor="noOfPax" className="form-label">No. of Pax | 人数 <span className="text-danger">*</span></label>
              <input type="number" className="form-control" id="noOfPax" value={noOfPax} onChange={(e) => setNoOfPax(e.target.value)} />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">Email address | 电邮 <span className="text-danger">*</span></label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-1">
              <label htmlFor="whatsapp" className="form-label">WhatsApp Number | WhatsApp 号码</label>
              <input type="text" className="form-control" id="whatsapp" value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)} />
            </div>
            {message && <span className="text-danger">{message}</span>}
          </div>
        </div>
      </WeddingModal>
      <WeddingModal modalClass={cardModalClass} onCloseClick={onCardCloseClick} onSaveClick={onCardSaveClick} bigModal={false} saveText={"Download"} showSave={true}>
        {/* {name} */}

        <div className="invitation-card-wrapper mb-3" ref={ref}>
          <div className={`invitation-card ${cardLanguage ? "zh" : "en"}`}>
            <img
              src="/wedding/hjxmy2.png"
              alt="hjxmy"
              className="img-fluid" />
            <br />
            <span className="wedding-text">{cardLanguage ? "我们结婚啦!" : "Wedding Invitation!"}</span><br />
            <span className="wedding-invite">{cardLanguage ? "诚邀您来参加我们的婚礼" : "You are invited to our wedding"} </span>
            <hr />
            <span className="wedding-invite small">{cardLanguage ? "婚礼时间: 2023年9月16日" : "Date: 16 September 2023"}</span><br />
            <span className="wedding-invite small">{cardLanguage ? "婚礼地点: TBC" : "Location: TBC"}</span>
          </div>
        </div>
        <button className="btn btn-dark btn-rvsp" onClick={() => { onCardLanguageToggle() }}>{cardLanguage ? "English" : "中文"}</button>
        <br />
        <span className="text-danger">- We will contact you shortly.-</span>
      </WeddingModal>
      <WeddingModal modalClass={wazeModalClass} onCloseClick={onWazeCloseClick}>
        <h1>- Location to be confirm -</h1>
        <h3>Stay tune and RVSP</h3>
        <h4>Will notify once confirmed</h4>
      </WeddingModal>
    </div>
  )
}

export default Wedding