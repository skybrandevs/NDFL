import React from 'react'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'
import abouthero from '../../images/abouthero.png';
import emmanuel from '../../images/emmanuel.svg';
import david from '../../images/david.png';
import micheal from '../../images/micheal.png';
import chidozie from '../../images/chidozie.svg';
import kosi from '../../images/kosi.svg';
import kiara from '../../images/kiara.svg';
import lekan from '../../images/lekan.svg';

const about = () => {
  return (
    <div>

<Navbar></Navbar>

<div className='bac-ndfl'>

    <div className='container'>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
                <img src={abouthero} className='img-fluid about-hero' alt='about-hero'/>
                <h3 className='about-header'>Who are we</h3>
                <p className='about-sentence'>Founded in 2017 in Lagos, Neilz Design Fit-Out began as a visionary endeavor by Emmanuel Obiajulu Ukah, a pioneer in architectural and interior design. From our first project, a simple yet innovative wooden-strip partition at Andela, we have grown into a leading design-build firm, boasting a prestigious portfolio including the complete fit-out of the KUDA Bank Lagos headquarters. Our journey is a testament to our dedication, growth, and the continuous pursuit of design perfection.</p>

                <h3 className='about-header'>Our Process</h3>
                <p className='about-sentence'>We are committed to providing you with exceptional service that goes beyond your expectations. From the initial consultation to the final installation, we work closely with you to ensure that every detail is taken care of.</p>
            </div>
            <div className='col-lg-1'></div>
        </div>
    </div>

    </div>


    <div className='container'>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
<h3 className='about-header'>What We Do</h3>

<div className='row'>
    <div className='col-lg-6'>
<div className='brd-card-ndfl-1'>
    <h6 className='abt-service-header-1'>Architectural Design</h6>
    <p className='abt-service-sentence'>Powerful spaces make a difference in our lives. These spaces are where we come to work, learn, play, heal and live. We never lose sight of this as we combine passion, creativity, research and expertise to deliver innovative spaces. </p>
    <p className='abt-service-sentence'>We ensure that our clients do not only have to choose between function and beauty as our work-finishes is balanced, designed entirely and specifically for that one Client.</p>
    <p className='abt-service-sentence'>These services include:</p>
    <ul>
    <li className='service-list'>Schematic Design</li>
    <li className='service-list'>Design Development</li>
    <li className='service-list'>Contract Administration</li>
    <li className='service-list'>Workplace Strategies</li>
    <li className='service-list'>Visioning Sessions</li>
    <li className='service-list'>Programming</li>
    </ul>
</div>
    </div>

    <div className='col-lg-6'>
    <div className='brd-card-ndfl-2'>
    <h6 className='abt-service-header-2'>Interior Design</h6>
    <p className='abt-service-sentence'>Interior design is more than what hit the eyes as it makes a powerful difference in our lives. Neilz Design provides everything you need to turn an empty shell into a vibrant and enjoyable environment.</p>
 
    <p className='abt-service-sentence'>These services include: </p>

    <ul>
    <li className='service-list'>Space Planning + Design </li>
    <li className='service-list'>Interior Fit-outs </li>
    <li className='service-list'>Selecting color schemes for your space and Banded Environment </li>
    <li className='service-list'>Furniture Selection and Procurement Planning</li>
    <li className='service-list'>Renovation and Refurbishment of existing spaces</li>
    <li className='service-list'>Plumbing and Light Finish, Appliance + Accessory Selection.</li>
    <div className='imaginary'></div>
    </ul>

</div>   
        </div>


    
   

        <div className='col-lg-6'>
<div className='brd-card-ndfl-3'>
    <h6 className='abt-service-header-3'>Consulting</h6>
    <p className='abt-service-sentence'>Is your workplace a through reflection of your Brand? The world is changing and corporations must rethink how they do business: how they manage their company, where and when they convene workers, generational differences, the impact of technology on the workplace, etc.
It’s our policy to always listen to our client’s individual needs, we observe your organizational culture, analyze your technology and audit your facilities to see how staff come and go, eat and drink, and socialize.</p>
   
    <p className='abt-service-sentence'>These services include:</p>
    <ul>
    <li className='service-list'>Workplace Optimisation</li>
    <li className='service-list'>Health and Wellness Evaluation</li>
    <li className='service-list'>Activity Based Evaluation</li>
    <div className='imaginary-3'></div>
    </ul>
</div>
    </div>

    <div className='col-lg-6'>
    <div className='brd-card-ndfl-4'>
    <h6 className='abt-service-header-4'>Facility Management</h6>
    <p className='abt-service-sentence'>Do you need experts to manage and maintain your building assets? We provides facilities management services for both commercial and residential spaces. Our services include, but are not limited to strategic planning and maintenance to managing third-party suppliers and supporting staff. 
The advantages of delegating facility management to experts cannot be minimized.</p>
 
    <p className='abt-service-sentence'>Typically our functions as facility managers include: </p>

    <ul>
    <li className='service-list'>Scheduling and planning maintenance and building repairs</li>
    <li className='service-list'>Handling legal or contractual matters (with occupants and third-party suppliers)</li>
    <li className='service-list'>Providing occupants with the right equipment and amenities </li>
    <li className='service-list'>Being compliant with health and safety regulations</li>
    <li className='service-list'>Ensuring the property and its surroundings are kept secure</li>
 
    </ul>

</div>   
        </div>


        <div className='col-lg-6'>
    <div className='brd-card-ndfl-5'>
    <h6 className='abt-service-header-5'>E-Design</h6>
    <p className='abt-service-sentence'>We offer electronic design services to client who only needs us to provide design for their space, this service is only design based and for online purposes as the name implies. Clients who requires any of our rendered services in this confinement can get us to do so in respect to our e-design service provision.
    </p>
 
    <p className='abt-service-sentence'>These services include: </p>

    <ul>
    <li className='service-list'>Electronic design solutions</li>
    <li className='service-list'>Online design consultation</li>
    <li className='service-list'>Online design and project supervision</li>
    <div className='imaginary-5'></div>
    </ul>

</div>   
        </div>


        <div className='col-lg-6'>
    <div className='brd-card-ndfl-6'>
    <h6 className='abt-service-header-1'>Office Space Listing</h6>
    <p className='abt-service-sentence'>As an esteemed partner of Churchgate and WTC, renowned brands in the business industry, we are uniquely positioned to offer our clients seamless access to premium office spaces. Leveraging our strategic partnerships, we excel in providing swift and efficient solutions, ensuring that clients can effortlessly secure the ideal office space tailored to their specific needs.</p>
 
    <p className='abt-service-sentence'>These services include:</p>

    <ul>
    <li className='service-list'>Tailored Office Space Solutions</li>
    <li className='service-list'>Expedited Process</li>
    <li className='service-list'>Comprehensive Assistance</li>
    <li className='service-list'>Access to Premium Locations</li>
    <li className='service-list'>Flexible Options</li>
    <li className='service-list'>Ongoing Support</li>
    </ul>

</div>   
        </div>
</div>

            </div>
            <div className='col-lg-1'></div>
        </div>
    </div>


    <div className='container'>
     
<div className='row'>
    <div className='col-lg-1'></div>
    <div className='col-lg-10'>

    <h3 className='about-header'>Our Team</h3>   

        <div className='row'>

<div className='col-lg-4'>

    <img src={emmanuel} className='img-fluid profiles' alt='emmanuel'/>
    <h3 className='prof-name'>Emmanuel Ukah</h3>
    <p className='prof-designation'>Design Lead</p>
</div>
<div className='col-lg-4'>
<img src={david} className='img-fluid  profiles-2' alt='david'/>
<h3 className='prof-name'>David Samson</h3>
<p className='prof-designation-2'>Design Architect</p>
</div>
<div className='col-lg-4'>
<img src={micheal} className='img-fluid profiles-3' alt='micheal'/>
    <h3 className='prof-name'>Michael Oluwasola</h3>
    <p className='prof-designation-3'>Presentation Architect</p>
</div>
<div className='col-lg-4'>
<img src={chidozie} className='img-fluid profiles-4' alt='chidozie'/>
    <h3 className='prof-name'>Chidozie Darlington</h3>
    <p className='prof-designation-4'>Light Designer</p>
</div>
<div className='col-lg-4'>
<img src={kosi} className='img-fluid profiles-5' alt='kosi'/>
    <h3 className='prof-name'>Kosisochukwu Okeke</h3>
    <p className='prof-designation-5'>Design Ops & Media</p>
</div>
<div className='col-lg-4'>
<img src={kiara} className='img-fluid profiles-6' alt='kiara'/>
    <h3 className='prof-name-2'>Kiara Akenema</h3>
    <p className='prof-designation-6'>Design Architect</p>
</div>
<div className='col-lg-4'>
<img src={lekan} className='img-fluid profiles-7' alt='lekan'/>
    <h3 className='prof-name-3'>Lekan Dabiri</h3>
    <p className='prof-designation-7'>Visual Designer</p>
</div>

        </div>

    </div>
    <div className='col-lg-1'></div>
</div>


    </div>


<Footer></Footer>


    </div>
  )
}

export default about