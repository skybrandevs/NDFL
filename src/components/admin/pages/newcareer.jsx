import React from 'react'
import Nav from '../partials/nav';
import backarrowadmin from '../../../images/backarrowadmin.svg';
import cloudup from '../../../images/cloudup.svg';
import { Link } from 'react-router-dom';

const newcareer = () => {
  return (
    <div>
        <div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>

    <div className='col-lg-10 bacc'>
<Link to="/careerspanel" className='link'>
<img src={backarrowadmin} className='img-fluid backarrowadmin' alt='backarrowadmin'/>
</Link>

 <div className='card-admin-h'>
<h3 className='admin-header-title'>New Career</h3>
<div className='row'>
    <div className='col-lg-4'>
    <p className='admin-sub-header-title'>Job Title</p>
    <input type='text' placeholder='Presentation Architect' className='text-field-testimonials'/>

<p className='admin-sub-header-title'>Featured Image</p>
<div className='card-upload'>
 <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
<p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
<p className='label-title-2'>Drag and drop here or </p>
<button type='file' className='input-file'>Browse</button>
           </div>
</div>
</div>
<div className='col-lg-12'>
<p className='admin-sub-header-title'>Body</p>
<textarea type='text' placeholder='Career Benefits' className='text-field-description'/>
</div>
 </div>
 

 
 <div> 
<button className='admin-save'>Save</button>
</div>

    </div>
     </div>
    </div>
  )
}

export default newcareer