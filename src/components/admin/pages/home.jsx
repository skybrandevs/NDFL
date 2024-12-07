import React from 'react'
import Nav from '././../partials/nav';
import cloudup from '../../../images/cloudup.svg';
import kosie from '../../../images/kosie.png';
import add from "../../../images/add.svg";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <div>
<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
    <div className='col-lg-10 bacc'>
      <div className='card-admin-h'>
    <h3 className='admin-header-title'>Hero Section</h3>
    <p className='admin-sub-header-title'>Images</p>

          <div className='row'>
    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller'>Save</button> 
    </div>
 </div>
 </div>  


   <div className='card-admin-h'>

    <h3 className='admin-header-title'>Ceo Quote</h3>

    <p className='admin-sub-header-title'>Sub Text</p>

    <input type='text' placeholder='Enter Ceo Quote' className='text-field-admin'/>


    <p className='admin-sub-header-title'>Images</p>

          <div className='row'>
    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
</div>
 </div>
 <button className='admin-save-3'>Save</button>  
 </div> 



 <div className='card-admin-h'>

<h3 className='admin-header-title'>Section 3</h3>

<p className='admin-sub-header-title'>Video link</p>

<input type='text' placeholder='youtube.com/hhsjseeheueueqnwhqw' className='text-field-video'/>


      <div className='row'>
<div className='col-lg-3'>
<p className='admin-sub-header-title'>Years of Experience</p> 
<input type='text' placeholder='11' className='text-field-counter'/>
</div>

<div className='col-lg-3'>
<p className='admin-sub-header-title'>Completed Project</p> 
<input type='text' placeholder='60' className='text-field-counter'/>
</div>

<div className='col-lg-3'>
<p className='admin-sub-header-title'>Satisfied Clients</p> 
<input type='text' placeholder='30' className='text-field-counter'/>
</div>

</div>
<button className='admin-save-3'>Save</button>  
</div> 


<div className='card-admin-h'>
    <h3 className='admin-header-title'>Some of our clients</h3>

          <div className='row'>

          <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
        <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
        </div>
        <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>
    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    <div className='col-lg-3'>
        <div className='card-upload'>
            <img src={cloudup} className='img-fluid cloudup' alt='cloudup'/>
            <p className='label-title'>JPG, PNG or WebP. Less than 10MB</p>
            <p className='label-title-2'>Drag and drop here or </p>
            <button type='file' className='input-file'>Browse</button>
           </div>
           <button className='admin-smaller-client'>Save</button> 
    </div>

    </div>
  </div>  



 <div className='card-admin-h'>

<h3 className='admin-header-title'>Testimonials</h3>

<div className='row'>
     <div className="col-lg-6">
     <div className="fancy-card-admin">
                        <div className="row">
                          <div className="col-lg-6">
<img src={kosie} className='img-fluid' alt='client-face'/>
     </div>

     <div className="col-lg-6">
<p>I really enjoyed working with Neilz Design Fitout, they are very communicative and quick to do the job. I really can’t wait to work with them again</p>
<Link to="/addtestimonial" className='link'>
<span className="edit">Edit</span>
</Link>
 <span className="delete">Delete</span>
     </div>

     </div>
    </div>
     </div>

     <div className="col-lg-6">
     <div className="fancy-card-admin">
                        <div className="row">
                          <div className="col-lg-6">
<img src={kosie} className='img-fluid' alt='client-face'/>
     </div>

     <div className="col-lg-6">
<p>I really enjoyed working with Neilz Design Fitout, they are very communicative and quick to do the job. I really can’t wait to work with them again</p>
<Link to="/addtestimonial" className='link'>
<span className="edit">Edit</span>
</Link>
 <span className="delete">Delete</span>
     </div>

     </div>
    </div>
     </div>

     <div className="row">
              <div className="col-lg-11 add-mr-top">
              <Link to="/addtestimonial" className='link'>
                <span className="flotter">
                    <img src={add} className="img-fluid add-2" alt="add" />
                    Add another
                  </span>
                  </Link>
                 </div>
            </div>
</div>
    
</div> 

</div>



</div>
    </div>
  )
}

export default home