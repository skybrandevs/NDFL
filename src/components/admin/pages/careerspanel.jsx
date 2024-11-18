import React from 'react'
import Nav from '../partials/nav';
import present from '../../../images/present.png';
import add from '../../../images/add.svg';
import { Link } from 'react-router-dom';
import pdf from '../../../images/pdf.svg';

const careerspanel = () => {
  return (
    <div>
  <div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
   
   
    <div className='col-lg-10 bacc'>
    <div className='card-admin-h'>
    <h3 className='admin-header-title'>Careers</h3>

    <div className='row'>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={present} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Presentation Achitect</h3>
<div className='push-admin'></div>
<Link to="/newcareer" className='link'>
<span className='edit-vendors'>View</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>

<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={present} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Presentation Achitect</h3>
<div className='push-admin'></div>
<Link to="/newcareer" className='link'>
<span className='edit-vendors'>View</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>


 </div>


    <div className='row'>
  <div className='col-lg-11 add-mr-top'>

  <Link to="/newcareer" className='link'> <span className='flotter'><img src={add} className='img-fluid add-2' alt='add'/>Add another</span> </Link>
    
  </div>
</div>

   </div>

   <div className='card-admin-h'>
   <h3 className='admin-header-title'>Submissions</h3>

   <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Cv</th>
     

    </tr>
  </thead>
  <tbody>
 
    <tr>
   
      <td>John Doe</td>
      <td>0814538956094</td>
<td><img src={pdf} className='img-fluid pdf' alt='pdf'/></td>

   <td>
    <Link to='/candidate' className='link'>
   <span className='v'>View</span>
   </Link>
   <span className='d'>Delete</span>
    </td> 

    </tr>


    <tr>
    
    <td>John Doe</td>
      <td>0814538956094</td>
      <td><img src={pdf} className='img-fluid pdf' alt='pdf'/></td>
    <td>
    <span className='v'>View</span>
    <span className='d'>Delete</span>
    </td> 
    
    </tr>
   

  </tbody>
</table>

   </div>

   </div>


 


    </div>



    </div>
  )
}

export default careerspanel