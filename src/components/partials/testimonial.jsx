import React from 'react'
import joke from '../../images/joke.svg';
import arrowleft from '../../images/arrowleft.svg';
import arrowright from '../../images/arrowright.svg';
import people from '../../images/people.svg';
import quote from '../../images/quote.svg';

const testimonial = () => {
  return (
    <div>
        
   <div className='container'>
    <div className='row'>
    <div className='col-lg-12'>
<div className='bac-testimonial'>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active trans">
   <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
        <img src={quote} className='img-fluid quote' alt='quote'/>
<p className='testimonial-sentence'>“I really enjoyed working with Neilz Design Fitout, they are very communicative and quick to do the job. I really can’t wait to work with them again”</p>
      </div>
    </div>

<div className='row'>
  <div className='col-lg-6'>
<img src={joke} className='img-fluid testimonial-avatar' alt='joke'/>
<p className='client-name'>Joke Silva</p>
<p className='client-position'>CEO of Chicken republic</p>
  </div>
  <div className='col-lg-6'>
  <img src={arrowleft}  className="img-fluid arrow-left" alt='arrowleft' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"/>  
  <img src={arrowright}  className="img-fluid arrow-right" alt='arrowright' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"/>  
  <img src={people} className='img-fluid people' alt='people'/>
  </div>
</div>

   </div>
    </div>
    <div class="carousel-item trans">
    <div className='container'>
    <div className='row'>
      <div className='col-lg-12'>
        <img src={quote} className='img-fluid quote' alt='quote'/>
<p className='testimonial-sentence'>“I really enjoyed working with Neilz Design Fitout, they are very communicative and quick to do the job. I really can’t wait to work with them again”</p>
      </div>
    </div>

<div className='row'>
  <div className='col-lg-6'>
<img src={joke} className='img-fluid testimonial-avatar' alt='joke'/>
<p className='client-name'>Gbadegbo Peter</p>
<p className='client-position'>Vp GTBank</p>
  </div>
  <div className='col-lg-6'>
  <img src={arrowleft}  className="img-fluid arrow-left" alt='arrowleft' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"/>  
  <img src={arrowright}  className="img-fluid arrow-right" alt='arrowright' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"/>  
  <img src={people} className='img-fluid people' alt='people'/>
  </div>
</div>

   </div>
    </div>
  
  </div>
  {/*
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  */}
</div>
</div>
    </div>
    </div>
    </div>

<div className='abstract-2'>
<div className='container'>
<div className='row'>
<h3 className="lets-talk">Let’s talk about your project</h3>
<button className='lets-talk-button'>Contact Us</button>
</div>
</div>
</div>


</div>
    
  )
}

export default testimonial;