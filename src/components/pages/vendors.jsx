import React from 'react'
import Navbar from '../../components/partials/navbar';
import Footer from '../../components/partials/footer';

const vendors = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='abstract-portfolio'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
        <h3 className='vendors-header'>Explore the opportunity of working with big clients by signin up with us</h3>
        <p className='vendors-sentence'>Fill in the details below and we will be in touch</p>
        </div>
        <div className='col-lg-2'></div>
    </div>
</div>
        </div>

<div className='container'>
    <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
        <div class="row">
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Company Name</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Sector</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select Option</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
</div>

<div class="row">
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="col">
  <label for="exampleInputEmail1" class="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</div>

<label for="exampleInputEmail1" class="form-label">Full address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

<label for="formFile" class="form-label">CAC document</label>
<input class="form-control element" type="file" id="formFile"/>


<label for="formFile" class="form-label">Portfolio/images of previous works</label>
<input class="form-control element" type="file" id="formFile"/>

<button className='btn-contact-submit'>Submit</button>


        </div>
        <div className='col-lg-3'></div>
    </div>
</div>

<Footer></Footer>
    </div>
  )
}

export default vendors