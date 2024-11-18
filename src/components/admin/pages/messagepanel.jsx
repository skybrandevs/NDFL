import React from 'react'
import Nav from '../partials/nav';
import { Link } from 'react-router-dom';

const messagepanel = () => {
  return (
    <div>
         <div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
   
   
    <div className='col-lg-10 bacc'>
   
   <div className='card-admin-h'>
   <h3 className='admin-header-title'>Message</h3>

   <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Message</th>
     

    </tr>
  </thead>
  <tbody>
 
    <tr>
   
      <td>John Doe</td>
      <td>0814538956094</td>
      <td>Loremipsum dolor et pil ...</td>


   <td>
    <Link to='/preview' className='link'>
   <span className='v'>View</span>
   </Link>
   <span className='d'>Delete</span>
    </td> 

    </tr>


    <tr>
    
    <td>John Doe</td>
      <td>0814538956094</td>
      <td>Loremipsum dolor et pil ...</td>
     
    <td>
    <span className='v'>View</span>
    <span className='d'>Delete</span>
    </td> 
    
    </tr>

    <tr>
    
    <td>John Doe</td>
      <td>0814538956094</td>
      <td>Loremipsum dolor et pil ...</td>
     
    <td>
    <span className='v'>View</span>
    <span className='d'>Delete</span>
    </td> 
    
    </tr>

    <tr>
    
    <td>John Doe</td>
      <td>0814538956094</td>
      <td>Loremipsum dolor et pil ...</td>
     
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

export default messagepanel