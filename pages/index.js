import React, { useState, Component } from 'react';
import Link from 'next/link';
import horizVids from '../public/static/data/horizVids'
import verVids from '../public/static/data/verVids'

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const The_Int = getRandomInt(getRandomInt(Object.keys(horizVids).length))
  //const widdy = Window.innerWidth

  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        randInt: The_Int,
        vid: "",
        vidClass: ""
     }
      this.vidOrientation = this.vidOrientation.bind(this)
      console.log(The_Int)
    }

    vidOrientation() {
      let width = window.innerWidth;
      const breakpoint = 790;
      console.log(window.innerWidth)
      if(width > breakpoint ){
        console.log(horizVids[this.state.randInt])
        this.setState({
          vid: horizVids[this.state.randInt],
          vidClass: "horiz"
        })
      } else {
        console.log(verVids[this.state.randInt])
        this.setState({
          vid: verVids[The_Int],
          vidClass: "vert"
        })
      }
    }
    
    componentDidMount(){
      this.vidOrientation();
      window.addEventListener("resize", this.vidOrientation);
    }

    componentWillUnmount(){
      window.removeEventListener("resize", this.vidOrientation);
    }

    render() { 
      return (
        <div className="pageWrapper">
          <div className="col mainPage" style={{width: '100%'}}>
          <div className="linksRow">
              <button className = "mainPageButton"><Link href='/listen'>Listen</Link></button>
              <button className = "mainPageButton"><Link href='/contact'>Contact</Link></button>
              <button className = "mainPageButton"><Link href='/'>Patreon</Link></button>
              <button className = "mainPageButton"><Link href='/about'>About</Link></button>
              <button className = "mainPageButton"><Link href='/blog'>Blog</Link></button>
            </div>
            <video autoPlay playsInline muted loop className={`bgVid ${this.state.vidClass}`}>
              <source src={this.state.vid} type="video/mp4" />
            </video>
          </div>
      </div>
      )
    }
  }
   
  export default Home;

