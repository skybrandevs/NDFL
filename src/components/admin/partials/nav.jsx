import React from 'react'
import logo from '../../../images/logo.svg';
import homeoutline from '../../../images/homeoutline.svg';
import about from '../../../images/about.svg';
import portfolio from '../../../images/portfolio.svg';
import vendors from '../../../images/vendors.svg';
import blog from '../../../images/blog.svg';
import careers from '../../../images/careers.svg';
import message from '../../../images/message.svg';
import back from '../../../images/back.svg';
import { Link } from 'react-router-dom';
const nav = () => {
  return (
    <div className='sticky-top'>
        <div className='container'>
            <div className='row'>
            <nav class="nav flex-column">
 <img src={logo} className='img-fluid logo' alt='logo-admin'/>
 <p className='logo-text'>Admin Dashboard</p>
  <Link to="/home" className="nav-link"><span><img src={homeoutline} className='img-fluid icon-menu' alt='icon-menu'/></span>Home</Link>
  <Link to="/aboutpanel" className="nav-link"><span><img src={about} className='img-fluid icon-menu' alt='icon-menu'/></span>About Us</Link>
  <Link to="/portfoliopanel" className="nav-link"><span><img src={portfolio} className='img-fluid icon-menu' alt='icon-menu'/></span>Portfolio</Link>
  <Link to="/vendorspanel" className="nav-link"><span><img src={vendors} className='img-fluid icon-menu' alt='icon-menu'/></span>Vendors</Link>
  <Link to="/blogpanel" className="nav-link"><span><img src={blog} className='img-fluid icon-menu' alt='icon-menu'/></span>Blogs</Link>
  <Link to="/careerspanel" className="nav-link"><span><img src={careers} className='img-fluid icon-menu' alt='icon-menu'/></span>Careers</Link>
  <Link to="/messagepanel" className="nav-link"><span><img src={message} className='img-fluid icon-menu' alt='icon-menu'/></span>Messages</Link>

  <Link to="/" className="nav-link"><span><img src={back} className='img-fluid icon-menu' alt='icon-menu'/></span>Back to Site</Link>
  </nav>
            </div>
        </div>
    </div>
  )
}

export default nav