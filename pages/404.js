import React from 'react';
import Nav from '../components/nav'
import Link from 'next/link'

export default function error() {

    return(
        <div className="pageWrapper">
            <div className="col">
                <Nav />
                <h1>404?</h1>
                <span>I barely know her...</span>
                <div style={{height:"60px"}} />
                <Link href='/'>
                    <a style={{
                        fontSize:"15px",
                        textDecoration:"underline",
                    }}>
                        Click here to wild jump home
                    </a>
                </Link>
            </div>
        </div>
    )
}
