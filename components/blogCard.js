import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

function BlogCard(props) {
    return(
        <Link href={`/blog/${props.title}`} key={props.title}>
            <div className="col blogCard" onClick={props.method}>
                <div className="blogCardTitle">
                    <span>Posted on: {props.dop}</span>
                    <h3>{props.title}</h3>
                </div>
                <ReactMarkdown source={props.content} className="blogCardDescription"/>
                <div className='fader'/>
                {/* <FontAwesomeIcon icon={faChevronDown} className="downIcon"/> */}
            </div>
        </Link>
    )
}

export default BlogCard;