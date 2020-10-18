import React from 'react';
import Nav from '../../components/nav'
import AboutUs from '../../public/static/data/aboutUs'
import AboutCard from '../../components/aboutcard'
import Link from 'next/link'

const cards = []
for (var guy in AboutUs) {
  cards.push(
    <AboutCard key={guy} name={AboutUs[guy].name} char={AboutUs[guy].character} pic={AboutUs[guy].picture} abt={AboutUs[guy].about} twi={AboutUs[guy].twitter} />
  )
}

function About() {

    return (
      <div className="pageWrapper">
        <Nav />
        <div className="col aboutPage" style={{"width":"90vw"}}>
          <h1>About</h1>
          <div className="cardHolder">
            <div className="scrollGrad"></div>
            {cards}
          </div>

        </div>
      </div>
    );
  }
  

export default About