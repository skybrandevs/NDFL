import React from 'react'
import Nav from '../partials/nav';
import coverimage from '../../../images/coverimage.png';
import add from '../../../images/add.svg';
import { Link } from 'react-router-dom';


const vendorspanel = () => {
  return (
    <div>

<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
   
   
    <div className='col-lg-10 bacc'>
    <div className='card-admin-h'>
    <h3 className='admin-header-title'>List of Vendors</h3>

    <div className='row'>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span>
<div className='push-admin'></div>
<Link to="/vendorsdetailspanel" className='link'>
<span className='edit-vendors'>View</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span> 
<div className='push-admin'></div>
<span className='edit-vendors'>View</span> 
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>

<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span>
<div className='push-admin'></div>
<Link to="/vendorsdetailspanel" className='link'>
<span className='edit-vendors'>View</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span> 
<div className='push-admin'></div>
<span className='edit-vendors'>View</span> 
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>

<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span>
<div className='push-admin'></div>
<Link to="/vendorsdetailspanel" className='link'>
<span className='edit-vendors'>View</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='vendors-title'>Ajala Woods</h3>
<span className='vendors-work'>Capentry</span> 
<div className='push-admin'></div>
<span className='edit-vendors'>View</span> 
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>

  </div>


    <div className='row'>
  <div className='col-lg-11 add-mr-top'>

  <Link to="/vendorsdetailspanel" className='link'> <span className='flotter'><img src={add} className='img-fluid add-2' alt='add'/>Add another</span> </Link>
    
  </div>
</div>


   </div>
   </div>





    
    </div>

    </div>
  )
}

export default vendorspanel