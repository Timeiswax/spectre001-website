import React, { Component, useContext } from 'react'
import Link from 'next/link'
import Nav from '../../components/nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import { useRouter } from "next/router";
import { BlogContext } from '../contexts/blogContextProvider';

function BlogPost() {
    const context = useContext(BlogContext);
    const router = useRouter();
    const route = router.query.blogPost;
    const items = context.items;
    const expObjects = Object.values(items).filter(list => {
        return(
            list.title.toLowerCase() === route
        )
    });
    const title = expObjects.map(thing => {return(thing.title)})
    const content = expObjects.map(thing => {return(thing.content)})
    const dop = expObjects.map(thing => {return(thing.date_of_pub)})
    const author = expObjects.map(thing => {return(thing.author)})

    return(
        <div className="pageWrapper">
            <Nav />
            <div className="blogoFader"></div>
            <div className="postContent">
                <h1>{title}</h1>
                <h2>Created by {author} on {dop}</h2>
                {<ReactMarkdown source={content[0]}/>}
            </div>
        </div>
        
    )

}

export default BlogPost

        /*
            
                        <div className="row blogReturn">
                <Link href='/blog' ><FontAwesomeIcon icon={faChevronLeft} /> Return to the Blog</Link>
            </div>


        */