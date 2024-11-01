import React from 'react'
import Nav from '../partials/nav';
import backarrowadmin from '../../../images/backarrowadmin.svg';
import cloudup from '../../../images/cloudup.svg';
import { Link } from 'react-router-dom';

const vendorsdetailspanel = () => {
  return (
    <div>


<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>

    <div className='col-lg-10 bacc'>
<Link to="/vendorspanel" className='link'>
<img src={backarrowadmin} className='img-fluid backarrowadmin' alt='backarrowadmin'/>
</Link>

 <div className='card-admin-h'>
<h3 className='admin-header-title'>Ajala Woods</h3>
<div className='row'>
    <div className='col-lg-4'>
    <p className='admin-sub-header-title'>Project Name</p>
    <input type='text' placeholder='Churchgate' className='text-field-testimonials'/>

<p className='admin-sub-header-title'>Featured Image</p>
<div className='card-upload'>
 <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
<p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
<p className='label-title-2'>Drag and drop here or </p>
<button type='file' className='input-file'>Browse</button>
           </div>
</div>
</div>

<div className='row'>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Client Name</p>
    <input type='text' placeholder='Churchgate' className='text-field-testimonials'/>
    </div>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Duration</p>
    <input type='text' placeholder='4 weeks' className='text-field-testimonials'/>
    </div>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Size</p>
    <input type='text' placeholder='120 sqm' className='text-field-testimonials'/>
    </div>
</div>


<div className='row'>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Location</p>
    <input type='text' placeholder='Lagos' className='text-field-testimonials'/>
    </div>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Category</p>
    <input type='text' placeholder='Commercial' className='text-field-testimonials'/>
    </div>
   
</div>

    </div>

 

    </div>
     </div>


    </div>
  )
}

export default vendorsdetailspanel