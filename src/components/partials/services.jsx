import React from 'react'
import maskgroup from '../../images/maskgroup.png'
import arrowservice from '../../images/arrowservice.svg';
import interiordesign from '../../images/interiordesign.png';
import consulting from '../../images/consulting.png';
import facility from '../../images/facility.png';
import edesign from '../../images/edesign.png';
import officespace from '../../images/officespace.png';
import qucoon from '../../images/qucoon.png';
import dsm from '../../images/dsm.png';
import welltec from '../../images/welltec.png';
import betaglass from '../../images/betaglass.png';
import bucch from '../../images/bucch.png';
import churchgate from '../../images/churchgate.png';
import creo from '../../images/creo.png';
import cala from '../../images/cala.png';
import tbo from '../../images/tbo.png';
import powergas from '../../images/powergas.png';


const services = () => {
  return (
    <div className='service-background'>

<div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
            <h3 className='service-header'>Our Services</h3>
        </div>
    </div>
</div>


<div className='container'>
    <div className='row'>
        <div className='col-lg-7'>
<img src={maskgroup} className='img-fluid service-img' alt='service-image'/>
        </div>

        <div className='col-lg-5'>
       <div className='pink'>
<h3 className='h33'>Architectural Design</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div>     
            </div>
    </div>


<div className='row'>

<div className='col-lg-5'>
<div className='blue'>
<h3 className='h33'>Interior Design</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div> 
</div>

<div className='col-lg-7'>
<img src={interiordesign} className='img-fluid service-img' alt='service-image'/> 
</div>

</div>


<div className='row'>

<div className='col-lg-7'>
<img src={consulting} className='img-fluid service-img' alt='service-image'/>
        </div>

        <div className='col-lg-5'>
       <div className='green'>
<h3 className='h33'>Consulting</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div>     
            </div>
</div>



<div className='row'>

<div className='col-lg-5'>
       <div className='orange'>
<h3 className='h33'>Facility Management</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div>     
            </div>

<div className='col-lg-7'>
<img src={facility} className='img-fluid service-img' alt='service-image'/>
        </div>
      
</div>



<div className='row'>

<div className='col-lg-7'>
<img src={edesign} className='img-fluid service-img' alt='service-image'/>  
            </div>

<div className='col-lg-5'>
<div className='black'>
<h3 className='h33'>E-design</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div>  


        </div>
      
</div>



<div className='row'>

<div className='col-lg-5'>
       <div className='pink'>
<h3 className='h33'>Office Space Listings</h3>
<p className='p33'>Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality.</p>  
<button className='btn-service'>Learn More <span><img src={arrowservice} className='img-fluid arrow-2' alt='arrow'/></span></button>     
        </div>     
            </div>

<div className='col-lg-7'>
<img src={officespace} className='img-fluid service-img' alt='service-image'/>
        </div>
      
</div>

</div>


{/** clients logo section */}

<div className='container abstract'>

<div className='row'>
<div className='col-lg-12'>
<h3 className='service-clients'>Some of Our Clients</h3>
</div>
</div>

<div className='row'>

    <div className='col-lg-1'></div>
    
    <div className='col-lg-11'>
<img src={qucoon} className='img-fluid qucoon' alt='qucoon'/>
    <img src={dsm} className='img-fluid dsm' alt='dsm'/>  
    <img src={welltec} className='img-fluid welltec' alt='welltec'/>
    <img src={betaglass} className='img-fluid betaglass' alt='betaglass'/> 
    <img src={bucch} className='img-fluid bucch' alt='bucch'/>  
    <img src={churchgate} className='img-fluid churchgate' alt='churchgate'/> 
    <img src={creo} className='img-fluid creo' alt='creo'/>    
    <img src={cala} className='img-fluid cala' alt='cala'/>  
    <img src={tbo} className='img-fluid tbo' alt='tbo'/>  
    <img src={powergas} className='img-fluid powergas' alt='powergas'/>        
        </div>
       
     
</div>

</div>

{/** end **/}





   </div>
  )
}

export default services