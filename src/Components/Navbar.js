import React, { useEffect, useState } from "react";
import logo1 from "../assets/images/logo.jpg";
import logo from "../assets/images/logo.png";
// import logo2 from "../assets/images/logo2.png"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const formatDoubleDigits = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const eventDate = moment("2024-02-16", "YYYY-MM-DD");

// import { useRef,useEffect } from "react"
export default function Navbar() {
  const [remainingTime, setRemainingTime] = useState(
    moment.duration(eventDate.diff(moment()))
  );

  // const [fetchedData, setFetchedData] = useState([])
  // useEffect(() => {
  //   axios
  //     // This is for local development
  //     // .get("http://localhost:5000/api/v1/updates")

  //     // This is for production
  //     .get("https://conferenceapi.onrender.com/api/v1/updates")
  //     .then((res) => {
  //       // console.log(res.data)
  //       setFetchedData(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  // const hamburgerr = document.querySelector(".hamburger")
  // const navMenu = document.querySelector(".nav-main-menu")
  // const [switchToggled, setSwitchToggled] = useState(false)
  // const ToggleSwitch = () => {
  //   switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
  //   if (switchToggled === true) {
  //     hamburgerr.classList.toggle("active")
  //     navMenu.classList.toggle("active")
  //   } else {
  //     hamburgerr.classList.toggle("active")
  //     navMenu.classList.toggle("active")
  //   }
  // }

  //this below is the old toggle
  // const toggle = () => {
  //     hamburgerr.classList.toggle("active");
  //     navMenu.classList.toggle("active");

  //  };

  const hamburgerr = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-main-menu");
  const [switchToggled, setSwitchToggled] = useState(false);
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active");
      navMenu.classList.toggle("active");
    } else {
      hamburgerr.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(moment.duration(eventDate.diff(moment())));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="overlay">
        <div className="overlay-item">
          <div className="header-contact">
            <HiOutlineMail />
            <p>encode@gmail.com</p>
          </div>
          <div className="header-contact">
            <IoIosPhonePortrait />
            <p>+91 123456789</p>
          </div>
        </div>
        <div className="overlay-item">
          <div className="overlay-btn blink">List of Hotels</div>
          <div className="overlay-btn blink">First Information Brochure</div>
          <div className="overlay-btn blink">Second Information Brochure</div>
          <div className="overlay-btn blink">Import dates</div>
        </div>
        <div className="overlay-item">
          {/* Social links */}
          <a href="https://www.facebook.com/ICOGES">
            <FaFacebookF fontSize="1.5rem" />
          </a>
          <a href="https://twitter.com/ICOGES">
            <FaTwitter fontSize="1.5rem" />
          </a>
          <a href="https://www.linkedin.com/company/icoges">
            <FaLinkedinIn fontSize="1.5rem" />
          </a>
        </div>
      </div>
      <div>
        <div className="header-1">
          <p className="text">
            <span>ICOGES 2024 | </span>
            <span>February 16 - 17</span>
          </p>
          <div className="timer">
            <div>
              <p>{formatDoubleDigits(remainingTime.days())}</p>
              <p>Days</p>
            </div>
            <div>
              <p>{formatDoubleDigits(remainingTime.hours())}</p>
              <p>Hours</p>
            </div>
            <div>
              <p>{formatDoubleDigits(remainingTime.minutes())}</p>
              <p>Minutes</p>
            </div>
            <div>
              <p>{formatDoubleDigits(remainingTime.seconds())}</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-container">
            <img className="icghd-logo header-logo" src={logo1} alt="Logo2" />
            <img className="pdeu-logo header-logo" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="links">
          {/* <ul className="nav-up">
            <li>
              <Link to="/commingsoon" className="upLinks">
                SPONSOR
              </Link>
            </li>
            <li>
              <Link to="/commingsoon" className="upLinks">
                REGISTER
              </Link>
            </li>
          </ul> */}

          <ul className="nav-main-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/themes" className="nav-link">
                THEME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/keynotespeakers" className="nav-link">
                KEYNOTE SPEAKERS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/committee" className="nav-link">
                COMMITTEES
              </Link>
            </li>
            <li className="nav-item">
              {/* <div className="dropdown">
                <button className="dropdown-button">
                  For Authors
                </button>
                <div className="dropdown-content">
                <Link to="/callforpapers" className="nav-link">
                  CALL FOR PAPER
                </Link>
                <Link to="/registration" className="nav-link">
                  REGISTRATION
                </Link>
                </div>
              </div> */}
              <li class="dropdown">
                <div class="dropbtn">
                  FOR AUTHORS
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="down-arrow-icon"
                  />
                </div>
                <div class="dropdown-content">
                  <Link to="/callforpapers" className="nav-link">
                    CALL FOR PAPER
                  </Link>
                  <Link to="/registration" className="nav-link">
                    REGISTRATION
                  </Link>
                </div>
              </li>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sponsorship" className="nav-link">
                SPONSORSHIP
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        <div id="hamburger" className="hamburger" onClick={ToggleSwitch}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      {/* <Marquee gradient={false} style={{color: "white"}}>
        {fetchedData.map((data) => (
          <Update key={data._id} update={data.update} />
        ))}
      </Marquee> */}
    </div>
  );
}
