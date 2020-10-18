import React from 'react';
import Nav from '../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {

    return (
      <div className="pageWrapper">
        <Nav />
        <div className="col" style={{"width":"90vw"}}>
          <h1>We'd love to hear from you</h1>
          <div style={{"height": "60px"}}></div>
          <span>Shoot us an email at <a href="mailto:inquiries@spectre001pod.com" style={{textDecoration:"underline"}}>inquiries@spectre001pod.com</a></span>
          <span>Or follow us on the socials:</span>
          <div style={{"height":"30px"}} />
          <div className="row socialRow">
            <a href="twitter.com" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href="instagram.com" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          </div>
        </div>
      </div>
    );
  }

export default Contact