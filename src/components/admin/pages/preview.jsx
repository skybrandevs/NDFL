import React from 'react'
import Nav from '../partials/nav';
import backarrowadmin from '../../../images/backarrowadmin.svg';
import { Link } from 'react-router-dom';

const preview = () => {
  return (
    <div>
          <div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>

    <div className='col-lg-10 bacc'>
<Link to="/messagepanel" className='link'>
<img src={backarrowadmin} className='img-fluid backarrowadmin' alt='backarrowadmin'/>
</Link>

 <div className='card-admin-h'>
<h3 className='admin-header-title'>John Doe</h3>


<div className='row'>
    <div className='col-lg-12'>
    <p className='admin-sub-header-title'>Cover Letter</p>
    <textarea type='text' placeholder='Lorem Ipsum' className='text-field-blog'/>
    </div>
   </div>

  
 </div> 


    </div>



    </div>
    </div>
  )
}

export default preview