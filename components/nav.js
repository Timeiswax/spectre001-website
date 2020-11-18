import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faRss} from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Nav = () => {
    const [overlay, toggleOverlay] = useState(false);

    return(
        <nav className="navigation">
            <button className="menuButton" onClick={() => {toggleOverlay(!overlay)}}>
                <FontAwesomeIcon icon={faBars} className="navBars"/>
            </button>
            <Link href='/'><img src="/static/png/spectre-logo-small.png" 
                                alt="Spectre 001"
                                style={{"onMouseover":"pointer"}}
                                /></Link>
            <CSSTransition
            in={overlay}
            appear={true}
            timeout={750}
            classNames="overlay"
            >
                <div className="navOverlay">
                    <div className="col">
                        <ul>
                            <li className='navLinks'><Link href='/'>Home</Link></li>
                            <li className='navLinks'><Link href='/listen'>Listen</Link></li>
                            <li className='navLinks'><Link href='/contact'>Contact</Link></li>
                            <li className='navLinks'><Link href='/about'>About</Link></li>
                            {/* <li className='navLinks'><Link href='/'>Support us on Patreon</Link></li> */}
                            <li className='navLinks'><Link href='/blog'>Blog</Link></li>
                        </ul>
                        <div className="row socialRow-nav">
                            <a href="https://twitter.com/spectre001pod?s=11" ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="https://feed.podbean.com/spectre001/feed.xml" ><FontAwesomeIcon icon={faRss}></FontAwesomeIcon></a>
                            <a href="https://www.instagram.com/spectre001pod/" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </nav>
    )
}

export default Nav