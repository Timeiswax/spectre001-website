import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

function AboutCard(props) {
    return(
        <Link href={`/about/${props['name']}`}>
            <div className = 'row aboutCard'>
                <div className={"row"} style={{width:"90%"}}>
                    <img src={props['pic']} alt={props['name']} className='aboutPic'></img>
                    <div className = 'col'>
                        <h3>{props['name']}</h3>
                        <a href={`https://twitter.com/${props['twi']}`}>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> 
                            &nbsp;&nbsp;&nbsp;{props['twi']}
                        </a>
                    </div>
                </div>
                <div className = 'col direcArrow' >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </Link>
    )
}

export default AboutCard