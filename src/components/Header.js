import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/me.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Ashley M. Moore</strong>
        <br />
        <br />
        "Do not go where the path may lead, go instead where there is no path and leave a trail."-- Ralph Waldo Emerson
        <br />
        <a href="http://html5up.net"></a>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
