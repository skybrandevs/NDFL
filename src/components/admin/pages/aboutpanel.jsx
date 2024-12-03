import React from 'react'
import Nav from '../partials/nav';
import cloudup from '../../../images/cloudup.svg';
import add from '../../../images/add.svg';

const aboutpanel = () => {
  return (
    <div>

<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
    <div className='col-lg-10 bacc'>

    <div className='card-admin-h'>
    <h3 className='admin-header-title'>Section 1</h3>
    <p className='admin-sub-header-title'>Images</p>

<div className='row'>
<div className='col-lg-3'>
<div className='card-upload'>
  <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
  <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
  <p className='label-title-2'>Drag and drop here or </p>
  <button type='file' className='input-file'>Browse</button>
</div>
<button className='admin-save-2'>Save</button>
</div>

</div>

  </div>
 
 



        <div className='card-admin-h'>
        <h3 className='admin-header-title'>Our team</h3>

<div className='row'>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Full Name</p>
  <input type='text' placeholder='Emmanuel Ukah' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Designation</p>
  <input type='text' placeholder='Design Lead' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <div className='card-upload-about'>
  <img src={cloudup} className='img-fluid cloudup-about' alt='cloudup'/>
  <p className='label-title-about'>JPG, PNG or WebP. Less than 10MB</p>
  <p className='label-title-2-about'>Drag and drop here or </p>
  <button type='file' className='input-file-about'>Browse</button>
 </div>
  </div>
</div>

<div className='row'>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Full Name</p>
  <input type='text' placeholder='Emmanuel Ukah' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Designation</p>
  <input type='text' placeholder='Design Lead' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <div className='card-upload-about'>
  <img src={cloudup} className='img-fluid cloudup-about' alt='cloudup'/>
  <p className='label-title-about'>JPG, PNG or WebP. Less than 10MB</p>
  <p className='label-title-2-about'>Drag and drop here or </p>
  <button type='file' className='input-file-about'>Browse</button>
 </div>
  </div>
</div>

<div className='row'>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Full Name</p>
  <input type='text' placeholder='Emmanuel Ukah' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <p className='admin-sub-header-title'>Designation</p>
  <input type='text' placeholder='Design Lead' className='text-field-testimonials'/>
  </div>
  <div className='col-3'>
  <div className='card-upload-about'>
  <img src={cloudup} className='img-fluid cloudup-about' alt='cloudup'/>
  <p className='label-title-about'>JPG, PNG or WebP. Less than 10MB</p>
  <p className='label-title-2-about'>Drag and drop here or </p>
  <button type='file' className='input-file-about'>Browse</button>
 </div>
  </div>
</div>

<div className='row'>
  <div className='col-lg-11'>
    <span className='flotter'><img src={add} className='img-fluid add' alt='add'/>Add another</span>
  </div>
</div>
          </div>
          <button className='admin-save'>Save</button>
    </div>
    </div>

    </div>
  )
}

export default aboutpanel