import React from 'react'
import Nav from '../partials/nav';
import coverimage from '../../../images/coverimage.png';
import add from '../../../images/add.svg';
import { Link } from 'react-router-dom';
const portfoliopanel = () => {
  return (
    <div>
        <div className='row'>
    <div className='col-lg-2'>
<Nav></Nav>
    </div>
   
   
    <div className='col-lg-10 bacc'>
    <div className='card-admin-h'>
    <h3 className='admin-header-title'>Portfolio List</h3>

    <div className='row'>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<Link to="/portfoliodetailspanel" className='link'>
<span className='edit'>Edit</span> 
</Link>
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>

<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>

<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
<div className='col-lg-4'>
<div className='fancy-card-admin'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={coverimage} className='img-fluid' alt='img'/>
</div>
<div className='col-lg-6'>
<h3 className='port-panel-header'>Churchgate Reception</h3>
<span className='edit'>Edit</span> 
<span className='delete'>Delete</span>
</div>
</div>

</div>
</div>
    </div>

    <div className='row'>
  <div className='col-lg-11 add-mr-top'>

  <Link to="/portfoliodetailspanel" className='link'> <span className='flotter'><img src={add} className='img-fluid add-2' alt='add'/>Add another</span> </Link>
    
  </div>
</div>


   </div>
   </div>





    
    </div>
    </div>
  )
}

export default portfoliopanel