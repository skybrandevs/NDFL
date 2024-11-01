import React from 'react'
import logo from '../../images/logo.svg';
import ig from '../../images/ig.svg';
import fb from '../../images/fb.svg';
import x from '../../images/x.svg';
import p from '../../images/p.svg';
import be from '../../images/be.svg';
import youtube from '../../images/youtube.svg';
import lin from '../../images/lin.svg';


const footer = () => {
  return (
    <div className='footer-bac'>

<div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={logo} className='img-fluid logo-footer' alt='logo'/>
<p className='sentence-footer'>With over a decade of experience in integrated design-build, we are the leading architectural and interior design company based in Lagos, Nigeria</p>
        </div>

        <div className='col-lg-6'>

            <div className='row'>
                <div className='col-lg-6'>
<h6 className='footer-title'>Address</h6>
<p className='footer-subject-1'>318 Ikorodu-Ososun Rd, Anthony,Ikorodu 105102, Lagos</p>
<p className='footer-subject-2'>5 The Mall, London,England,United Kingdom</p>
                </div>

                <div className='col-lg-6'>
                <h6 className='footer-title'>Contact Us</h6>
                <p className='footer-subject-3'>+234 708 354 9134</p>     
                <p className='footer-subject-4'>projects@neilzdesignfitout.com</p>       
                    </div>
            </div>
            
            </div>
    </div>
</div>

<div className='divider'></div>

<div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
<h6 className='footer-title-below'>Follow Us</h6>
<a href="https://www.linkedin.com/company/neilzdesign/" target='_blank' rel='noreferrer'><img src={lin} className='img-fluid io' alt='lin'/></a>
<a href="https://www.instagram.com/neilzdesign/" target='_blank' rel='noreferrer'><img src={ig} className='img-fluid io' alt='ig'/></a>
<a href="https://www.facebook.com/neilzdesign" target='_blank' rel='noreferrer'><img src={fb} className='img-fluid io' alt='fb'/></a>
<a href="https://x.com/home" target='_blank' rel='noreferrer'><img src={x} className='img-fluid io' alt='x'/></a>
<a href='https://www.pinterest.com/neilzdesign/' target='_blank' rel="noreferrer"><img src={p} className='img-fluid io' alt='p'/></a>
<img src={be} className='img-fluid io' alt='be'/>
<img src={youtube} className='img-fluid io' alt='youtube'/>


        </div>

        <div className='col-lg-6'>
      <p className='copyrights'>Copyright © 2024. Neilzdesignfitout. All rights reserved.</p>      
            </div>
    </div>
</div>

    </div>
  )
}

export default footer