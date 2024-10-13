import React from 'react'
import Navbar from '../../components/partials/navbar';
import Footer from '../../components/partials/footer';
import { Link } from 'react-router-dom';
import back from '../../images/back.svg';
import jd from '../../images/jd.png';

const jobdescription = () => {
  return (
    <div>
        <Navbar></Navbar>
         <div className='abstract-portfolio'>
         <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
            <Link to="/careers">
                <img src={back} className='img-fluid back-icon-2' alt='back'/>
                </Link>
               <img src={jd} className='img-fluid jd' alt='jd'/>
                </div>
        </div>
    </div>
         </div>

         <div className='container'>
<div className='row'>
    <div className='col-lg-1'></div>
    <div className='col-lg-10'>
<h3 className='jd-title'>Presentation Architect</h3>
<p className='jd-subtitle'>Who Are We Looking For</p>
<ul>
    <li className='jd-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li className='jd-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li className='jd-list'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
</ul>

<p className='jd-subtitle'>Educational Requirement</p>
<p className='jd-sentence'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
    </div>
    <div className='col-lg-1'></div>
</div>
         </div>

         <div className='careers-background'>

     <div className='container'>
        <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>
                <h3 className='career-sentence'>Fill in the details below and we will be in touch</h3>
                <div class="row">
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Phone number</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</div>

<label for="exampleInputEmail1" class="form-label">Cover Letter</label>
<input type="message" class="form-control message" id="exampleInputEmail1" aria-describedby="emailHelp"/>

<label for="formFile" class="form-label">CV</label>
<input class="form-control element" type="file" id="formFile"/>


<label for="formFile" class="form-label">Portfolio/images of previous works</label>
<input class="form-control element" type="file" id="formFile"/>

<button className='btn-contact-submit'>Submit</button>
            </div>
            <div className='col-lg-3'></div>
        </div>
     </div>
         </div>


         <Footer></Footer>
    </div>
  )
}

export default jobdescription