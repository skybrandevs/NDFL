import React from 'react'
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link } from "react-router-dom";

const addtestimonial = () => {
  return (
    <div>

<div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        <div className="col-lg-10 bacc">
          <Link to="/home" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          <div className="card-admin-h">
          <h3 className="admin-header-title">New Testimonial</h3>

          <div className='card-testimonial'>

<div className='row'>

<div className='col-lg-4'>
<p className='admin-sub-header-title'>Name</p>
<input type='text' placeholder='Joke Silva' className='text-field-testimonials'/>
</div>

<div className='col-lg-4'>
<p className='admin-sub-header-title'>Designation</p>
<input type='text' placeholder='CEO Chicken Republic' className='text-field-testimonials'/>

</div>


<div className='row'>

<div className='col-lg-8'>
<p className='admin-sub-header-title'>Quote</p>
<input type='text' placeholder='Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.' className='text-field-quote'/>
</div>

<div className='col-lg-4'>

<img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
            
</div>
</div>
</div>
<button className='admin-save-3'>Save</button>  
    </div>


          </div>
          </div>




</div>


    </div>
  )
}

export default addtestimonial;