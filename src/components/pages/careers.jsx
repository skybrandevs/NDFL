import React from 'react'
import Navbar from '../../components/partials/navbar';
import Footer from '../../components/partials/footer';

const careers = () => {
  return (
    <div>
        <Navbar></Navbar>
           <div className='abstract-portfolio'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
        <h3 className='contact-header'>Be a part of our journey</h3>
        <p className='careers-sentence'>We recognize that compensation and benefits play a major part in 
making sure that you feel you can focus on your work. 
We offer generous packages to make sure you feel respected 
and appreciated as an employee.</p>
        </div>
        <div className='col-lg-2'></div>
    </div>
</div>
</div>

<div className='container'>
    <div className='row'>
    <div className='col-lg-2'></div>
    <div className='col-lg-8'>
        <h3>Why you should join us</h3>
        <div className='row'>
            <div className='col-lg-6'>
<h3>Team work</h3>
<p>Collaborate with skilled professionals on innovative projects, fostering a supportive and creative work environment.</p>
            </div>
            <div className='col-lg-6'>
        <h3>Secured Future</h3>       
        <p>Build a stable career with a reputable company that values its employees and offers long-term growth opportunities.</p> 
            </div>
        </div>

        <div className='row'>
            <div className='col-lg-6'>
<h3>Learning Opportunity</h3>
<p>Continuously expand your knowledge and expertise through professional development programs and on-the-job training.</p>
            </div>
            <div className='col-lg-6'>
       <h3>Improved Skills</h3>         
       <p>Enhance your architectural abilities and technical skills through challenging projects and mentorship from industry experts.</p>
            </div>
        </div>
    </div>
    <div className='col-lg-2'></div>    
        </div>
</div>
        <Footer></Footer>
    </div>
  )
}

export default careers