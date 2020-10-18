import React, { Component } from 'react'
import Nav from '../../components/nav'
import BlogCard from '../../components/blogCard'
import {CSSTransition} from 'react-transition-group'
import Link from 'next/link'
import { BlogContext } from '../contexts/blogContextProvider';


class BlogIntro extends Component {
    static contextType = BlogContext;

    render() {
        const items = this.context.items;
        var blogCards = Object.keys(items).map(post => {
            var guy = items[post]
            return(
                    <BlogCard 
                        title={guy.title} 
                        content={guy.content} 
                        dop={guy.date_of_pub} 
                        />
            )
        })
        
        return (
        <div className="pageWrapper">
            <Nav/>
            <div className="blogIntro">
                    {/* <CSSTransition
                    in={true}
                    appear={true}
                    timeout={1000}
                    classNames='fade'> */}
                        <div className="col" style={{position:"relative", flexDirection:"flex-end"}}>
                            <h1>Blog</h1> 
                            <div style={{"height":"30px"}} />                        
                            <div className="blogCardContainer">
                                {blogCards}
                            </div>
                        </div>
                    {/* </CSSTransition> */}
            </div>
        </div>
        )
    }
}

export default BlogIntro