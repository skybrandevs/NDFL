import React from 'react'
import Nav from '../partials/nav';
import backarrowadmin from '../../../images/backarrowadmin.svg';
import cloudup from '../../../images/cloudup.svg';
import { Link } from 'react-router-dom';

const blogpostpanel = () => {
  return (
<div>


<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>


    <div className='col-lg-10 bacc'>
<Link to="/blogpanel" className='link'>
<img src={backarrowadmin} className='img-fluid backarrowadmin' alt='backarrowadmin'/>
</Link>

 <div className='card-admin-h'>
<h3 className='admin-header-title'>New Blog Post</h3>
<div className='row'>
    <div className='col-lg-9'>
    <p className='admin-sub-header-title'>Title</p>
    <textarea type='text' placeholder='Write Post title' className='text-field-blog'/>

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
    <div className='col-lg-9'>
    <p className='admin-sub-header-title'>Body</p>
    <textarea type='text' placeholder='Tell your story' className='text-field-description'/>
    </div>
   </div>


<div className='row'>
<p className='admin-sub-header-title'>Second Featured Image</p>
<div className='card-upload'>
 <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
<p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
<p className='label-title-2'>Drag and drop here or </p>
<button type='file' className='input-file'>Browse</button>
</div>
</div>


<div className='row'>
    <div className='col-lg-9'>
    <p className='admin-sub-header-title'> Second Body</p>
    <textarea type='text' placeholder='Continue your story' className='text-field-description'/>
    </div>
   </div>

<div className='row'>
    <div className='col-lg-4'>
    <p className='admin-sub-header-title'>Posted By</p>
    <select type='text' placeholder='Commercial' className='text-field-testimonials'/>
    </div>

    <div className='col-lg-4'>
    <p className='admin-sub-header-title'>Category</p>
    <select type='text' placeholder='Commercial' className='text-field-testimonials'/>     
    
        </div>
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

export default blogpostpanel