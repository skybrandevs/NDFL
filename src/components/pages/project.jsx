import React from 'react'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'
import back from '../../images/back.svg';
import account from '../../images/account.svg';
import timer from '../../images/timer.svg';
import ruler from '../../images/ruler.svg';
import location from '../../images/location.svg';
import home from '../../images/home.svg';
import churchreception from '../../images/churchreception.png';
import preview1 from '../../images/preview1.png';
import preview2 from '../../images/preview2.png';
import pback from '../../images/pback.svg';
import { Link } from 'react-router-dom';

const project = () => {
  return (
    <div>
        <Navbar></Navbar>
 <div className='abstract-portfolio'>

    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
            <Link to="/portfolio">
                <img src={back} className='img-fluid back-icon' alt='back'/>
                </Link>
                <h3 className='project-title'>Churchgate reception</h3>
                <div className='span-setting'>
                <span className='tag'><img src={account} className='img-fluid icon-tag' alt='account'/>Churchgate</span>
                <span className='tag'><img src={timer} className='img-fluid icon-tag' alt='timer'/>4 weeks</span>
                <span className='tag'><img src={ruler} className='img-fluid icon-tag' alt='ruler'/>120 Sqm</span>
                <span className='tag'><img src={location} className='img-fluid icon-tag-2' alt='location'/>Lagos Nigeria</span>
                <span className='tag'><img src={home} className='img-fluid icon-tag' alt='home'/>Interior Design</span>
    
                </div>
            
            </div>
        </div>
    </div>

 </div>

<div className='container'>
    <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
<img src={churchreception} className='img-fluid' alt='churchreception'/>
<h3 className='project-sub-title'>Project Description</h3>
<p className='project-sentence'>Step into this office space and experience the perfect blend of precision and elegance. It is a haven where professionalism meets timeless beauty, inspiring you to accomplish your best work with confidence and grace. </p>
<p className='project-sentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta ultrices vulputate. Duis sapien ipsum, semper ut aliquam ac, maximus at quam. Aliquam rutrum, diam et ultrices tincidunt, velit tellus pharetra nisl, in consectetur mi est nec ex. Nam vel cursus magna, eget luctus lorem. Fusce tortor neque, feugiat sed feugiat dictum, varius eu metus. Cras massa enim, mollis sed nisl et, aliquet pellentesque eros. Cras commodo sit amet velit et euismod. Suspendisse potenti.</p>

  <h3 className='project-sub-title'>Other Images</h3>    

  <div className='row'>

    <div className='col-lg-6'>
<img src={preview1} className='img-fluid' alt='preview1'/>
    </div>

    <div className='col-lg-6'>
<img src={preview2} className='img-fluid' alt='preview2'/>       
    </div>
   
<Link to="/portfolio" className='back-button'><img src={pback} className="img-fluid pback"alt='pback'/>Go back
  </Link>
  </div>
      
        </div>
        <div className='col-lg-1'></div>
    </div>

</div>

 <Footer></Footer>
    </div>
  )
}

export default project