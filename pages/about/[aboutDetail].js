import React, {Component, useEffect, useState} from 'react'
import Nav from '../../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import AboutUs from '../../public/static/data/aboutUs'
import { useRouter, withRouter } from "next/router";
import Link from 'next/link'



function AboutDetail() {

      const router = useRouter()
      const matchName = router.query.aboutDetail
      if(matchName == null) {
        return(
          <div></div>
        )
      }
      const strdude = AboutUs.filter(p => p.name === matchName)
      const dude = strdude[0]
    
      return (
        <div className = "pageWrapper aboutDetail" key={dude}>  
              <Nav />
              <div className="col" style={{"justifyContent":"flex-start"}}>
                <div style={{"min-height": "30px"}}></div>
                <h1>{dude.name}</h1>
                <h2>{dude.character}</h2>
                <a href={`https://twitter.com/${dude.twitter}`}>
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> 
                  &nbsp;&nbsp;&nbsp;{dude.twitter}
                </a>
                <img src={dude.picture}alt={dude.name} className='detailPic'></img>
                <ReactMarkdown source={dude.about}/>
                {/* <Link href='/about' >
                  <div className="about-return">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <a>return to about</a>
                  </div>
                </Link> */}
              </div>
        </div>
        );
}


export default AboutDetail;

