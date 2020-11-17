import React from 'react';
import Nav from '../components/nav'

function Listen() {

    return (
      <div className="pageWrapper">
        <Nav />
        <div className="col" style={{"width":"90vw"}}>
          <h1>Listen</h1>
          <div style={{"height": "60px"}}></div>
          <p>We recommend listening to our first episode to kick things off!</p>
          <iframe title="Podcast Episode" src="https://open.spotify.com/embed-podcast/episode/5JIeU1CFCODQ8Vjza2l4iX" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    );
  }

export default Listen
