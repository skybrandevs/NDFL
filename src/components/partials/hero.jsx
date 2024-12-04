import React from 'react'
import style1 from '../../images/style1.png';
import style2 from '../../images/style2.png';
import style3 from '../../images/style3.png';
import style4 from '../../images/style4.png';
import functionmark from '../../images/functionmark.svg';
import { Link } from 'react-router-dom';

const hero = () => {
  return (

    <div className='bac-ndfl'>
    <div className='container'>
     <div className='row'>
         <div className='col-lg-12'>
           <div className='box'>
             <div className='container'>
                 <div className='row'>
                     <div className='col-lg-6'>
 <h3 className='ndfl-heading'>Where <span className='special'>function <img src={functionmark} className='img-fluid functionmark' alt='functionmark'/></span>meets beauty, and <span className='special'>dreams <img src={functionmark} className='img-fluid functionmark' alt='functionmark'/> </span> 
 take shape.</h3>
 <p className='ndfl-sentence'>Utilise our exceptional interior and architectural design services to transform your Nigerian workplaces and home spaces. This is where the journey to extraordinary space starts to unfold.</p>
 
 <Link to="/portfolio">
 <button className='btn-full-colo'>View Portfolio</button>
 </Link>
 <Link to="/contact">
 <button className='btn-border-colo'>Contact Us</button>
 </Link>
 
                     </div>
 
                     <div className='col-lg-6'>
    <div className='row'>
  <div className='col-lg-6'>
   <img src={style1} className='img-fluid style1 zoom' alt='style1'/>
   </div>  
     <div className='col-lg-6'>
     <img src={style2} className='img-fluid style2 zoom' alt='style2'/>
     </div>  
     <div className='col-lg-6'>
     <img src={style3} className='img-fluid style3 zoom' alt='style3'/> 
   </div>  
     <div className='col-lg-6'>
     <img src={style4} className='img-fluid style4 zoom' alt='style4'/>
     </div>  
     </div>                     
                         </div>
                 </div>
             </div>
           </div>
         </div>
     </div>
     </div>
 
 
     </div>


  )
}

export default hero