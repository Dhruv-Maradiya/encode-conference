import "../assets/css/contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faB} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import ReactWhatsapp from "react-whatsapp"
import React from "react";


const Contact = () => {
  return (
    <>
      <div className="contactus">
        <div className="con-title">
          <h1>Contacts</h1>
        </div>
        <div className="con-content">
          <ul>
            <li>
              <p>Contacts: </p>
              <a className="url" href="mailto:icoges24@gmail.com">
              icoges24@gmail.com
              </a>
            </li>
            <li>
              <p>Technical, Awards & Paper Submissions: </p>
              <a className="url" href="mailto:icoges@pdpu.ac.in">
                icoges@pdpu.ac.in
              </a>
            </li>
            <h1 className="student-organisers">Organisers</h1>
            <li>
              <p className="student-name">Achinta Bera (Convener)</p>
              <a className="url" href="mailto:achinta.bera@spt.pdpu.ac.in">
                achinta.bera@spt.pdpu.ac.in
              </a>
              <p>
              Phone No. : <d href="tel:+917477593900">7477593900</d>
              </p>
            </li>
            <li>
              <p className="student-name student2">Amit Verma (Co-convener)</p>
              <a className="url" href="mailto:amit.verma@spt.pdpu.ac.in">
                amit.verma@spt.pdpu.ac.in
              </a>
              <p>Phone No. : +9195767 86392</p>
            </li>
            <li>
              <p className="student-name">Paul Naveen (Co-convener)</p>
              <a className="url" href="mailto:paul.naveen@spt.pdpu.ac.in">
                paul.naveen@spt.pdpu.ac.in
              </a>
              <p>Phone No. +9180510 50067 </p>
            </li>
            
          </ul>
        </div>
        {/* <ReactWhatsapp number="+917218511311" message="">
          <div className="icon">
            <div className="whatsapp-icon">
              <img src="whatsapp.png" alt="whatsapp" />
            </div>
          </div>
        </ReactWhatsapp> */}
      </div>
    </>
  )
}

export default Contact
