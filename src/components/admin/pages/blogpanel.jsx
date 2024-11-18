import React from 'react'
import Nav from '../partials/nav';
import blogimage from '../../../images/blogimage.png';
import { Link } from 'react-router-dom';
import add from '../../../images/add.svg';

const blogpanel = () => {
  return (

<div>

<div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>


<div className='col-lg-10 bacc'>
    <div className='card-admin-h'>
    <h3 className='admin-header-title'>Blogs</h3>

    <div className='row'>
<div className='col-lg-6'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={blogimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</h3>

<div className='push-admin'></div>
<Link to="/blogpostpanel" className='link'>
<span className='edit-vendors'>Edit</span> 
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
<img src={blogimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</h3>
<div className='push-admin'></div>
<Link to="/blogpostpanel" className='link'>
<span className='edit-vendors'>Edit</span> 
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
<img src={blogimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</h3>
<div className='push-admin'></div>
<Link to="/blogpostpanel" className='link'>
<span className='edit-vendors'>Edit</span> 
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
<img src={blogimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='blog-title'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</h3>
<div className='push-admin'></div>
<Link to="/blogpostpanel" className='link'>
<span className='edit-vendors'>Edit</span> 
</Link>
<span className='delete-vendors'>Delete</span>
</div>
</div>

</div>
</div>


  </div>


    <div className='row'>
  <div className='col-lg-11 add-mr-top'>

  <Link to="/blogpostpanel" className='link'> <span className='flotter'><img src={add} className='img-fluid add-2' alt='add'/>Add another</span> </Link>
    
  </div>
</div>


   </div>
   </div>

   </div>
    </div>
  )
}

export default blogpanel;