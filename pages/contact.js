import React from 'react';
import Nav from '../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

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
            <Link href="https://twitter.com/spectre001pod?s=11" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
            <Link href="https://www.instagram.com/spectre001pod.com" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
          </div>
        </div>
      </div>
    );
  }

export default Contact