import React from 'react'
import Nav from '../partials/nav';
import backarrowadmin from '../../../images/backarrowadmin.svg';
import pdf from '../../../images/pdf.svg';
import { Link } from 'react-router-dom';

const candidate = () => {
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
<h3 className='admin-header-title'>John Doe</h3>

<div className='row'>
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Full Name</p>
    <input type='text' placeholder='lorem ipsum' className='text-field-testimonials'/>
    </div>
   
    <div className='col-lg-3'>
    <p className='admin-sub-header-title'>Phone Number</p>
    <input type='number' placeholder='lorem ipsum' className='text-field-testimonials'/>
    </div>

  
</div>


<div className='row'>
    <div className='col-lg-12'>
    <p className='admin-sub-header-title'>Cover Letter</p>
    <textarea type='text' placeholder='Lorem Ipsum' className='text-field-blog'/>
    </div>

    <div className='col-lg-12'>
    <p className='admin-sub-header-title'>CV</p>
    <img src={pdf} className='img-fluid' alt='document'/>
    <p>Open</p>
    </div>

   </div>

  
      <div className='row'>
      <p className='admin-sub-header-title'>Portfolio images</p>
          <div className='col-lg-3'>
        <div className='card-upload'>
      <p className='label-title'>Portfolio Images would be here</p>
         
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
        </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
        </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
        </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
        <p className='label-title'>Portfolio Images would be here</p>
           </div>
    </div>

    

 </div>
 </div> 


    </div>



    </div>
    </div>
  )
}

export default candidate