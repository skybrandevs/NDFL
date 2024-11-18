import React from 'react'
import logo from '../../images/logo.svg';
import icontoggle from '../../images/icontoggle.svg';
import arrow from '../../images/arrow.svg';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link to="/">
    <img src={logo} className=" img-fluid navbar-brand" alt='logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><img src={icontoggle} className='img-fluid' alt='toggle'/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto adjuster">
        <li className="nav-item">

          <Link to="/" className="nav-link">Home</Link>
    </li>

    <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
    </li>

    <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
    </li>


    <li className="nav-item">
    <Link to="/vendors" className="nav-link">Vendors</Link>
    </li>


    <li className="nav-item">
    <Link to="/blog" className="nav-link ">Blog</Link>
    </li>


    <li className="nav-item">
    <Link to="/careers" className="nav-link">Careers</Link>
    </li>


       </ul>
      <div className="d-flex">
      <Link to="/contact" className="nav-link">
    <button className="header-btn">Contact Us <img src={arrow} className='img-fluid arrow' alt='arrow'/> </button>
    </Link>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default navbar;