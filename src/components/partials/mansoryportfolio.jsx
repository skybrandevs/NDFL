import React from 'react'
import mansory1 from '../../images/mansory1.png';
import mansory2 from '../../images/mansory2.png';
import mansory3 from '../../images/mansory3.png';
import { Link } from 'react-router-dom';

const mansoryportfolio = () => {
  return (
    <div>
<div className='container'>
    <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>

        <div className='background-mansory'>

        <ul class="nav nav-pills" id="pills-tab" role="tablist">    
  <li class="nav-item push" role="presentation">
    <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-commercial-tab" data-bs-toggle="pill" data-bs-target="#pills-commercial" type="button" role="tab" aria-controls="pills-commercial" aria-selected="false">Commercial</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-residential-tab" data-bs-toggle="pill" data-bs-target="#pills-residential" type="button" role="tab" aria-controls="pills-residential" aria-selected="false">Residential</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-edesign-tab" data-bs-toggle="pill" data-bs-target="#pills-edesign" type="button" role="tab" aria-controls="pills-edesign" aria-selected="false">E-design</button>
  </li>

</ul>
</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active trans" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
    <div className='row'>
        <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

    </div>
  </div>
  <div class="tab-pane fade trans" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab" tabindex="0">
  <div className='row'>
        <div className='col-lg-4'>
   <Link to="/project">       
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
</Link>

        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

    </div>
  </div>
  <div class="tab-pane fade trans" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab" tabindex="0">
  <div className='row'>
        <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

    </div>
  </div>
  <div class="tab-pane fade trans" id="pills-edesign" role="tabpanel" aria-labelledby="pills-edesign-tab" tabindex="0">
  <div className='row'>
        <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

            <div className='col-lg-4'>
<img src={mansory1} className='img-fluid mansory-img' alt='mansory'/>
        </div>
        <div className='col-lg-4'>
        <img src={mansory2} className='img-fluid mansory-img' alt='mansory'/>          
            </div>
            <div className='col-lg-4'>
            <img src={mansory3} className='img-fluid mansory-img' alt='mansory'/>  
            </div>

    </div>
  </div>
</div>

 </div>
   <div className='col-lg-1'></div>

    </div>
</div>
    </div>
  )
}

export default mansoryportfolio;